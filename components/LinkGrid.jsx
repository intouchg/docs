import { useTheme } from 'styled-components'
import { useSpring, animated, config } from 'react-spring'
import { Grid, Link, Stack, Box } from '@intouchg/components'

export const initialStyles = (theme) => ({
	x: 0,
	scale3d: [0.975, 0.975, 0.975],
	color: theme.colors.Text,
	boxShadow: `${theme.colors.Card} 0px 3px 9px`,
})

export const hoverStyles = (theme) => ({
	x: 1,
	scale3d: [1.025, 1.025, 1.025],
	color: theme.colors.Background,
	boxShadow: `${theme.colors.Card} 0px 5px 20px`,
})

const LinkGridItem = ({ href, children }) => {
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
		<animated.div
			style={{
				scale3d: spring.scale3d,
				boxShadow: spring.boxShadow,
			}}
			onMouseEnter={() => updateStyles(true)}
			onMouseLeave={() => updateStyles(false)}
		>
			<Link
				href={href}
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				height="340px"
				marginX="auto"
				fontSize={3}
				textAlign="center"
				textDecoration="none"
				borderWidth="2px"
				borderStyle="solid"
				borderColor="Neutral"
				borderRadius="4px"
			>
				<Stack width="60%" minWidth="240px">
					<Box alignSelf="center">
						<Box position="relative" margin={0}>
							<animated.div
								style={{
									position: 'absolute',
									bottom: 0,
									height: '100%',
									width: width.to((w) => `${w * 100}%`),
									willChange: 'width',
									backgroundImage: `linear-gradient(160deg, #FF6FD8 10%, ${theme.colors.Primary} 100%)`,
									opacity: spring.x,
									zIndex: '-1',
								}}
							/>
							<animated.div style={{ color: spring.color }}>
								<Box paddingX={3} paddingY={2} marginY={4}>
									{children[0]}
								</Box>
							</animated.div>
						</Box>
					</Box>
					{children[1] && <Box marginBottom={5}>{children[1]}</Box>}
				</Stack>
			</Link>
		</animated.div>
	)
}

const LinkGrid = ({ children, ...props }) => (
	<Grid
		paddingY={5}
		gridRow="auto auto"
		gridTemplateColumns={[
			'100%',
			null,
			null,
			'calc(50% - 8px) calc(50% - 8px)',
		]}
		gridColumnGap="12px"
		gridRowGap="16px"
		{...props}
	>
		{children}
	</Grid>
)

export { LinkGrid, LinkGridItem }
