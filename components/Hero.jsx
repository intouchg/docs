import dynamic from 'next/dynamic'
import { Box, Heading } from '@intouchg/components'
import { Navigation } from './Navigation'

const IntroAnimation = dynamic(
	() =>
		import('../components/IntroAnimation').then(
			(module) => module.IntroAnimation
		),
	{ ssr: false }
)
const Hero = () => (
	<Box height="90vh" minHeight="440px">
		<Navigation />
		<Box
			as="header"
			position="relative"
			width="100%"
			height="calc(100% - 120px)"
		>
			<Heading
				as="h1"
				position="absolute"
				top="0"
				bottom="0"
				left="0"
				display="flex"
				alignItems="center"
				padding={6}
				fontFamily="Inter-Black"
				fontSize={[6, null, null, 7]}
				letterSpacing="-0.05em"
			>
				Intouch Design <br />
				System
			</Heading>
			<Box
				position="absolute"
				top="0"
				bottom="0"
				right="0"
				width="50%"
				minWidth="560px"
				zIndex="-1"
			>
				<IntroAnimation />
			</Box>
		</Box>
	</Box>
)

export { Hero }
