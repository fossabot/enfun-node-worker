export const getPackageInfo = async () => {
	const packageJson = require('./../package');
	return {
		name: packageJson.name,
		description: packageJson.description,
		version: packageJson.version
	};
};