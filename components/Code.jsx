import { Box } from '@intouchg/components'

const Code = ({ children }) => (
	<Box
		as="code"
		fontFamily="Menlo-Regular"
		paddingX="4px"
		color="Highlight Dark"
		backgroundColor="Highlight Light"
		borderWidth="1px"
		borderStyle="solid"
		borderColor="Highlight"
		borderRadius="6px"
	>
		{children}
	</Box>
)

export { Code }
