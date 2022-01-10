import { useTheme } from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import { Box, Flex, Heading, Link } from '@intouchg/components'
import { initialStyles, hoverStyles } from './LinkGrid'

const DocFooterLink = ({ children, href }) => {
	const theme = useTheme()
	const [spring, setSpring] = useSpring(
		{ ...initialStyles(theme), config: config.wobbly },
		[theme]
	)
	const [{ width }, setWidth] = useSpring(
		{ width: 0, config: config.stiff },
		[]
	)

	const updateStyles = (hovered) => {
		setSpring(hovered ? hoverStyles(theme) : initialStyles(theme))
		setWidth({ width: hovered ? 1 : 0 })
	}

	return (
		<Box>
			<animated.div
				style={{ scale3d: spring.scale3d }}
				onMouseEnter={() => updateStyles(true)}
				onMouseLeave={() => updateStyles(false)}
			>
				<Link
					href={href}
					display="block"
					position="relative"
					textDecoration="none"
					margin={0}
				>
					<animated.div
						style={{
							position: 'absolute',
							bottom: 0,
							width: width.to((w) => `${w * 100}%`),
							willChange: 'width',
							height: '100%',
							backgroundImage: `linear-gradient(160deg, #FF6FD8 10%, ${theme.colors.Primary} 100%)`,
							opacity: spring.x,
							zIndex: '-1',
						}}
					/>
					<animated.div style={{ color: spring.color }}>
						<Box paddingX={3} paddingY={2} marginY={4}>
							<Heading color="inherit" textDecoration="none">
								{children}
							</Heading>
						</Box>
					</animated.div>
				</Link>
			</animated.div>
		</Box>
	)
}

const DocFooterFlex = ({ children, ...props }) => (
	<Flex width="100%" justifyContent="space-between" paddingTop={7} {...props}>
		{children}
	</Flex>
)

export { DocFooterFlex, DocFooterLink }
