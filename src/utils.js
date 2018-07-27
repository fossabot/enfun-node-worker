export const getPackageInfo = async () => {
	const packageJson = require('./../package');
	return {
		name: packageJson.name,
		description: packageJson.description,
		version: packageJson.version
	};
};

export const getFilesInDirectory = (dir) => {
	const recursive = require('recursive-readdir');
	return new Promise((resolve, reject) => {
		recursive(dir, (err, files) => {
			if(err) reject(err);
			resolve(files);
		});
	});
};