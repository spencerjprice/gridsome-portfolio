// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
	siteName: 'Spencer J Price',
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
	}
};
