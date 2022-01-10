import { Box } from '@intouchg/components'

const IntroParagraph = (props) => (
	<Box
		as="p"
		maxWidth="860px"
		paddingY={5}
		marginX="auto"
		fontSize={4}
		textAlign="center"
		{...props}
	/>
)

export { IntroParagraph }
