import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
	{
		files: ['**/*.js', '**/*.jsx'],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				document: 'readonly',
				window: 'readonly',
			},
		},
		plugins: {
			react: eslintPluginReact,
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					printWidth: 80,
					trailingComma: 'es5',
					semi: true,
					jsxSingleQuote: false,
					singleQuote: true,
					useTabs: true,
					endOfLine: 'auto',
				},
			],
			'no-duplicate-imports': 'error',
			'react/jsx-uses-vars': 'error',
			'react/jsx-uses-react': 'off', // React 17+ with JSX transform
			'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
