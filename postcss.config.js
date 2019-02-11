const postcssFunctions = require('postcss-functions');
const postcssPresetEnv = require('postcss-preset-env');
const postcssSassCompile = require('@csstools/postcss-sass');
const cssMqpacker = require('css-mqpacker');
const sortCssMediaQueries = require('sort-css-media-queries');
// const postcssPxtorem = require('postcss-pxtorem');
const environmentVariables = require('./css-env');

module.exports = {
	syntax: 'postcss-scss',
	plugins: [
		postcssFunctions({
			functions: {
				env: (variable) => {
					if (variable.match(/^\$/)) {
						return `env(${variable})`;
					}

					if (variable === undefined) {
						throw Error('Missing arguments of \'env()\' function');
					}

					if (environmentVariables[variable] === undefined) {
						throw Error('environment variable is not defined');
					}

					return environmentVariables[variable];
				}
			}
		}),
		postcssPresetEnv({
			stage: false,
			features: {
				'environment-variables': false,
				'custom-properties': false,
				'custom-selectors': {
					preserve: false
				},
				'custom-media-queries': {
					preserve: false
				},
				'media-query-ranges': {
					preserve: false
				},
				'image-set-function': {
					preserve: false
				}
			},
			autoprefixer: false,
			importFrom: {environmentVariables}
		}),
		postcssSassCompile({
			outputStyle: 'expanded'
		}),
		postcssPresetEnv({
			stage: false,
			features: {
				'all-property': {
					reset: 'all',
					replace: true
				},
				'any-link-pseudo-class': {
					preserve: false
				},
				'matches-pseudo-class': {
					preserve: false
				},
				'not-pseudo-class': {
					preserve: false
				},
				'focus-visible-pseudo-class': {
					preserve: false,
					replaceWith: '.focus-visible'
				},
				'focus-within-pseudo-class': {
					preserve: false,
					replaceWith: '.focus-within'
				}
			},
			autoprefixer: {
				cascade: false,
				add: true,
				remove: true
			}
		}),
		cssMqpacker({
			sort: sortCssMediaQueries
		}),
		// postcssPxtorem({
		// 	rootValue: 16,
		// 	unitPrecision: 5,
		// 	propList: ['*'],
		// 	selectorBlackList: [],
		// 	replace: true,
		// 	mediaQuery: true,
		// 	minPixelValue: 0,
		// })
	]
};
