import {getPackageInfo} from './utils';
import {invokeFunction} from './invocator';

export const createServer = async () => {
	const express = require('express');
	const bodyParser = require('body-parser');
	const cors = require('cors');
	const morgan = require('morgan');
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	if(process.env.DEBUG) app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
	return app;
};

export const listen = (app) => {
	return new Promise((resolve) => {
		const consola = require('consola');
		app.listen(process.env.PORT, () => {
			consola.ready(`Server listening on ${process.env.PORT}`);
			return resolve();
		});
	});
};

export const writeJson = (res) => (content) => res.json(content);
export const addInformationRoute = async (app) => app.get('/', (req, res) => getPackageInfo().then(writeJson(res)));
export const handleFunctionRequest = async (app) => app.get('/invoke/:name', (req, res) => invokeFunction(req.params.name, req.params || {}, req.body || {}).then(writeJson(res)));