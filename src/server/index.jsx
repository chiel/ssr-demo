import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

import routes from '../app/routes';

const app = express();

app.use(express.static(`${__dirname}/../public`));

const renderMarkup = markup => (
	`<!doctype html>
<html>
	<head>
		<title>React SSR Demo!</title>
	</head>
	<body>
		<div id="app-container">${markup}</div>
		<script src="/app.js"></script>
	</body>
</html>`
);

app.get('*', (req, res, next) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		if (err) return next(err);

		if (!props) return next();

		const render = () =>{
			const markup = renderToString(
				<RouterContext {...props} />
			);
			res.send(renderMarkup(markup));
		};

		const components = props.components
			.filter(component => !!component.fetchData);

		if (!components.length) {
			return render();
		}

		const promises = components
			.map(component => component.fetchData());

		Promise.all(promises)
			.then(render)
			.catch(next);
	});
});

app.listen(9090, () => {
	console.log('listening on port 9090');
});
