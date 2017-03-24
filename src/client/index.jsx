import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';

import routes from '../app/routes';

render((
	<Router children={routes} history={browserHistory} />
), document.getElementById('app-container'));
