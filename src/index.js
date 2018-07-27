import {createServer, listen} from './server';
require('dotenv').config();

createServer()
	.then((app) => {
		return app;
	})
	.then(listen);