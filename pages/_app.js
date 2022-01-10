import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@/components/MDXProvider'
import { PreloadFonts } from '@/components/PreloadFonts'
import { GlobalStyles } from '@/components/GlobalStyles'
import theme from '@/theme/theme'
import '@/vendor/prism-night-owl.css'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<>
				<Head>
					<title>Intouch Design System Docs</title>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<meta
						name="description"
						content="Documentation for the Intouch Design System"
					/>
					<link rel="icon" type="image/svg+xml" href="/icon.svg" />
					<PreloadFonts />
				</Head>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<MDXProvider>
						<Component {...pageProps} />
					</MDXProvider>
				</ThemeProvider>
			</>
		)
	}
}
