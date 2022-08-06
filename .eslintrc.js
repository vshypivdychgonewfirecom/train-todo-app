module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 'warn',
		'no-tabs': 'off',
		'semi': 'off',
		'indent': ['error', 'tab'],
		'quote-props': ['warn', 'consistent'],
		'curly': 'off',
		'array-callback-return': 'off'
	}
};