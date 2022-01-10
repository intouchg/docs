const IntouchThemePlugin = require('@intouchg/webpack-theme-plugin')
const IntouchSVGRPlugin = require('@intouchg/webpack-svgr-plugin')

// See docs and available options here:
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://github.com/vercel/next.js/blob/canary/packages/next/next-server/server/config.ts#L12-L63

module.exports = (phase) => ({
	webpack: (config, { defaultLoaders, isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false
		}

		config.module.rules.push(
			{
				test: /\.mdx$/,
				use: [
					defaultLoaders.babel,
					{
						loader: '@mdx-js/loader',
						options: {},
					},
				],
			},
			{
				test: /\.(vert|frag)$/,
				use: 'raw-loader',
			}
		)

		config.plugins.push(new IntouchThemePlugin())

		config.plugins.push(new IntouchSVGRPlugin())

		return config
	},
})
