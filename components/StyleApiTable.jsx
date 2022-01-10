import { Fragment } from 'react'
import { Box } from '@intouchg/components'
import { ApiTableTitle, ApiTableCell } from './ApiTable'
import styleApi from '@/content/apis/style'
import { Code } from './Code'

const StyleApiTable = ({ themeProperty, ...props }) => (
	<Box
		as="table"
		width="100%"
		fontSize={1}
		marginBottom={6}
		style={{ borderCollapse: 'collapse' }}
		{...props}
	>
		<Box as="thead" textAlign="left">
			<tr>
				<ApiTableTitle width="260px">Component Prop</ApiTableTitle>
				<ApiTableTitle width="300px">CSS Property</ApiTableTitle>
				<ApiTableTitle>Theme Key</ApiTableTitle>
			</tr>
		</Box>
		<Box as="tbody">
			{Object.entries(styleApi[themeProperty]).map(
				([cssProperty, { componentProps, themeKey }]) => (
					<tr key={cssProperty}>
						<ApiTableCell>
							{componentProps.map((prop, index) => (
								<Fragment key={prop}>
									<Code>{prop}</Code>
									{index !== componentProps.length - 1 &&
										', '}
								</Fragment>
							))}
						</ApiTableCell>
						<ApiTableCell>{cssProperty}</ApiTableCell>
						<ApiTableCell>
							{themeKey && <Code>{themeKey}</Code>}
						</ApiTableCell>
					</tr>
				)
			)}
		</Box>
	</Box>
)

export { StyleApiTable }
