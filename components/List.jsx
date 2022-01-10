import { Stack } from '@intouchg/components'

const List = ({ children, ...props }) => (
	<Stack paddingY={4} lineHeight="1.875" {...props}>
		{children}
	</Stack>
)

export { List }
