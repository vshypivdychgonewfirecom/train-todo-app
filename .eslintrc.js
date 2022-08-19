module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'standard'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
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
		'no-unused-vars': 'error',
		'no-tabs': 'off',
		'semi': 'off',
		'indent': ['error', 'tab'],
		'quote-props': ['warn', 'consistent'],
		'curly': 'off',
		'array-callback-return': 'off',
		'no-new': 0
	}
};
