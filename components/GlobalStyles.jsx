import { createGlobalStyle } from 'styled-components'
import { color } from '@intouchg/components'

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Inter-Regular';
		src: url('/Inter-Regular.ttf') format('truetype');
		font-display: swap;
	}

	@font-face {
		font-family: 'Inter-Black';
		src: url('/Inter-Black.ttf') format('truetype');
		font-display: swap;
	}

	@font-face {
		font-family: 'Menlo-Regular';
		src: url('/Menlo-Regular.ttf') format('truetype');
		font-display: swap;
	}

	* {
		outline: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);  
		-webkit-font-smoothing: antialiased;
	}

	html, body {
		margin: 0;
		font-family: Inter-Regular, sans-serif;
		font-weight: normal;
		color: ${color('Text')};
	}

	h1, h2, h3, h4, h5 {
		font-family: Inter-Black, sans-serif;
		font-weight: bold;
	}

	pre, code {
		font-family: Menlo-Regular, monospace;
	}

	p, h1, h2, h3, h4, h5, pre {
		margin: 0;
	}

	.highlight-line {
		background-color: rgba(29, 59, 83, 0.99);
	}
`

export { GlobalStyles }
