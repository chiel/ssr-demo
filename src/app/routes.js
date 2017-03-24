import App from './components/App';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';

export default [
	{
		component: App,

		childRoutes: [
			{
				path: '/',
				component: HomePage
			},
			{
				path: '/about',
				component: AboutPage
			}
		]
	}
];
