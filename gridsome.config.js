// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const path = require('path');

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/scss/globals.scss')]
		});
}

module.exports = {
	siteName: 'Spencer J',
	plugins: [
		{
			use: '@gridsome/source-filesystem',
			options: {
				path: 'posts/**/*.md',
				typeName: 'Post',
				route: '/blog/:title'
			}
		}
	],
	transformers: {
		//Add markdown support to all file-system sources
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: ['gridsome-plugin-remark-prismjs-all']
		}
	},
	chainWebpack(config) {
		// Load variables for all vue-files
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		// or if you use scss
		types.forEach(type => {
			addStyleResource(config.module.rule('scss').oneOf(type));
		});
	}
};
