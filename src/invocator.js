import {getFilesInDirectory} from './utils';

export const invokeFunction = async (name) => {
	const path = require('path');
	const consola = require('consola');
	const functionsDir = path.join(path.join(__dirname, './../'), process.env.FUNCTIONS_DIR, '/');
	const files = await getFilesInDirectory(functionsDir);
	for(let file of files) {
		if(file.replace(functionsDir, '').replace('.js', '') === name.replace(/-([a-z])/g,  (g) =>  g[1].toUpperCase())) {
			consola.info(`Invoking function: ${name}`);
		}
	}
	return {};
};