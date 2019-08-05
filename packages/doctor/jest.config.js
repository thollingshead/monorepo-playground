const base = require('../../jest.config.base.js');
const { name } = require('./package');

module.exports = {
	// Inherit base configuration
	...base,

	// Label for the project
	displayName: name,
};
