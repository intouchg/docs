import styled, { css } from 'styled-components'
import { space, color, styleFunctions } from '@intouchg/components'

const apiTableBorders = css`
	padding-top: ${space(2)};
	padding-bottom: ${space(2)};
	border-bottom: 2px solid;
	border-bottom-color: ${color('Highlight Dark')};
`

export const ApiTableTitle = styled.th`
	${apiTableBorders}
	${styleFunctions}
`

export const ApiTableCell = styled.td`
	${apiTableBorders}
	border-bottom: 1px solid;
`
