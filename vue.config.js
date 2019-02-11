const path = require('path');
const pugBem = require('pug-bem');

process.env.VUE_APP_TITLE = 'Metris — сообщество профессионалов недвижимости';

const pages = {
	index: {
		entry: 'src/pages/index/index.js',
		template: 'src/pages/index/index.pug',
		filename: 'index.html',
		title: ''
	},
};

module.exports = {
	publicPath: '/',
	pages,
	runtimeCompiler: true,
	chainWebpack(config) {
		// `html-webpack-plugin`
		Object.keys(pages).forEach(page => {
			config.plugin(`html-${page}`).tap(options => {
				options[0].minify = false;
				options[0].title = pages[page].title ? `${pages[page].title} — ${process.env.VUE_APP_TITLE}`
					: process.env.VUE_APP_TITLE;

				return options;
			});
		});

		// rule `pug`
		config.module.rule('pug').uses.clear();

		config.module.rule('pug').oneOf('vue')
			.resourceQuery(/^\?vue/)
			.use('pug-bem-plain-loader')
			.loader('pug-bem-plain-loader');

		config.module.rule('pug').oneOf('normal')
			.use('pug-loader')
			.loader('pug-loader')
			.options({
				pretty: '\t',
				plugins: [pugBem]
			});

		// rule `scss`
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach(type => {
			config.module.rule('scss').oneOf(type).uses.delete('sass-loader');

			config.module.rule('scss').oneOf(type)
				.use('style-resources-loader')
				.loader('style-resources-loader')
				.options({
					patterns: [
						path.resolve(__dirname, 'src/scss/functions/*.scss'),
						path.resolve(__dirname, 'src/scss/mixins/*.scss')
					]
				});
		});
	},
	productionSourceMap: false,
	css: {sourceMap: process.env.NODE_ENV !== 'production'},
	devServer: {
		hot: false,
		hotOnly: false
	}
};
