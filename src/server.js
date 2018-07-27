export const createServer = async () => {
	const express = require('express');
	const bodyParser = require('body-parser');
	const cors = require('cors');
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	return app;
};

export const listen = (app) => {
	return new Promise((resolve, reject) => {
		const consola = require('consola');
		app.listen(process.env.PORT, () => {
			consola.ready(`Server listening on ${process.env.PORT}`);
			return resolve();
		});
	});
};