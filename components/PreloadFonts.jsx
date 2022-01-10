const PreloadFonts = () => (
	<>
		<link
			crossOrigin="anonymous"
			rel="preload"
			href="/Inter-Regular.ttf"
			as="font"
			type="font/ttf"
		/>
		<link
			crossOrigin="anonymous"
			rel="preload"
			href="/Inter-Black.ttf"
			as="font"
			type="font/ttf"
		/>
		<link
			crossOrigin="anonymous"
			rel="preload"
			href="/Menlo-Regular.ttf"
			as="font"
			type="font/ttf"
		/>
	</>
)

export { PreloadFonts }
