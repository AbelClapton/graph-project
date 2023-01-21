module.exports = {
	env: {
		node: true,
		jest: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
}
