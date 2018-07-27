import {addInformationRoute, createServer, handleFunctionRequest, listen} from './server';
require('dotenv').config();

createServer()
	.then(addInformationRoute)
	.then(handleFunctionRequest)
	.then(listen);