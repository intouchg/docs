import styled from 'styled-components'
import { Stack, Flex, color } from '@intouchg/components'

const DocHeaderStack = styled(Stack)`
	padding: 16px;
	margin-left: -16px;
	margin-right: -16px;
	margin-bottom: 32px;
	border-radius: 6px;
	background-color: ${color('Highlight Light')};

	${Flex} {
		margin-top: 8px;

		&:first-of-type {
			margin-top: 16px;
		}
	}
`

export { DocHeaderStack }
