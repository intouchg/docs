import { Box } from '@intouchg/components'
import helperApi from '@/content/apis/helper'
import { Code } from './Code'

const HelperApiTable = (props) => (
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
				<Box
					as="th"
					width="260px"
					paddingY={2}
					borderBottomWidth="2px"
					borderBottomStyle="solid"
					borderBottomColor="Highlight Dark"
				>
					Helper Function
				</Box>
				<Box
					as="th"
					paddingY={2}
					borderBottomWidth="2px"
					borderBottomStyle="solid"
					borderBottomColor="Highlight Dark"
				>
					Theme Key
				</Box>
			</tr>
		</Box>
		<Box as="tbody">
			{Object.entries(helperApi).map(
				([helperFunction, themeProperty]) => (
					<tr key={helperFunction}>
						<Box
							as="td"
							paddingY={2}
							borderBottomWidth="1px"
							borderBottomStyle="solid"
							borderBottomColor="Highlight Dark"
						>
							<Code>{helperFunction}</Code>
						</Box>
						<Box
							as="td"
							paddingY={2}
							borderBottomWidth="1px"
							borderBottomStyle="solid"
							borderBottomColor="Highlight Dark"
						>
							{themeProperty}
						</Box>
					</tr>
				)
			)}
		</Box>
	</Box>
)

export { HelperApiTable }
