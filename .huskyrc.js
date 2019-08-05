module.exports = {
	hooks: {
		'pre-commit': 'npm run husky:pre-commit',
		// prepare-commit-msg hook does not work with Windows, use npm script
		// (https://github.com/commitizen/cz-cli/issues/627)
		// 'prepare-commit-msg': 'exec < /dev/tty && git cz --hook',
		'commit-msg': 'npm run husky:commit-msg',
	},
};
