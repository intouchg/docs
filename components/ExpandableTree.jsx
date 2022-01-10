import { memo, useEffect, useRef, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Text, Box, Flex, Stack, Button } from '@intouchg/components'
import MinusIcon from '@/icons/MinusIcon'
import PlusIcon from '@/icons/PlusIcon'
import CloseIcon from '@/icons/CloseIcon'
import { useMeasure, usePrevious } from '@intouchg/hooks'

const ExpandableTree = memo(({ children, title, defaultOpen = true }) => {
	const initialRender = useRef(true)
	const [open, setOpen] = useState(defaultOpen)
	const previous = usePrevious(open)
	const [ref, { height: viewHeight }] = useMeasure()

	const { height, opacity, transform } = useSpring({
		from: defaultOpen
			? {
					height: viewHeight,
					opacity: 1,
					transform: 'translate3d(0, 0, 0)',
			  }
			: { height: 0, opacity: 0, transform: 'translate3d(20px, 0, 0)' },
		to: {
			height: open ? viewHeight : 0,
			opacity: open ? 1 : 0,
			transform: `translate3d(${open ? 0 : 20}px, 0, 0)`,
		},
	})

	useEffect(() => (initialRender.current = false), [])

	return (
		<Box>
			<Flex>
				<Text>{title}</Text>
				<Button
					invisible
					display="flex"
					alignItems="center"
					justifyContent="center"
					fill="Highlight Dark"
					width="1em"
					height="1em"
					mt="6px"
					ml="8px"
					stroke="Highlight Dark"
					border="1px solid"
					borderColor="Highlight Dark"
					style={{ opacity: children ? 1 : 0.3, cursor: 'pointer' }}
					onClick={() => setOpen(!open)}
				>
					{children && open && (
						<MinusIcon width="0.5em" height="4px" />
					)}
					{children && !open && <PlusIcon width="0.5em" />}
					{!children && <CloseIcon width="1em" />}
				</Button>
			</Flex>
			<animated.div
				style={{
					overflow: 'hidden',
					willChange: 'opacity, height',
					opacity,
					height:
						(open && previous === open) ||
						(initialRender.current && defaultOpen)
							? 'auto'
							: height,
				}}
			>
				<animated.div
					style={{
						willChange: 'transform',
						transform,
					}}
					ref={ref}
				>
					<Stack paddingLeft={3}>{children}</Stack>
				</animated.div>
			</animated.div>
		</Box>
	)
})

ExpandableTree.displayName = 'ExpandableTree'

export { ExpandableTree }
