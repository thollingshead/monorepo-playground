module.exports = {
	// Use Conventional Commit pattern (https://www.conventionalcommits.org)
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-max-line-length': [2, 'always', 80],
	},
};
