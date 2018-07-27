import {addInformationRoute, createServer, listen} from './server';
require('dotenv').config();

createServer()
	.then(addInformationRoute)
	.then(listen);