import React from 'react';
import { Link } from 'react-router';

import HomePage from './HomePage';

export default function App({ children }) {
	return (
		<div>
			<header>
				<h1>SSR demo</h1>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</header>
			{children}
		</div>
	);
}
