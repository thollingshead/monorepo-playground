const base = require('./jest.config.base.js');

module.exports = {
	// Inherit base configuration
	...base,

	// The directory where Jest should output its coverage files
	coverageDirectory: '<rootDir>/coverage/',

	// Run tests for all projects
	projects: [
		'<rootDir>/packages/*/jest.config.js',
	],
};
