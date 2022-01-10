import { Box } from '@intouchg/components'
import { ApiTableTitle, ApiTableCell } from './ApiTable'
import themeApi from '@/content/apis/theme'
import { Code } from './Code'

const ThemeApiTable = ({ themePropertyType, ...props }) => (
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
				<ApiTableTitle width="260px">Theme Key</ApiTableTitle>
				<ApiTableTitle>Data Type</ApiTableTitle>
			</tr>
		</Box>
		<Box as="tbody">
			{Object.entries(themeApi[themePropertyType]).map(
				([themeProperty, dataType]) => (
					<tr key={themeProperty}>
						<ApiTableCell>
							<Code>{themeProperty}</Code>
						</ApiTableCell>
						<ApiTableCell>{dataType}</ApiTableCell>
					</tr>
				)
			)}
		</Box>
	</Box>
)

export { ThemeApiTable }
