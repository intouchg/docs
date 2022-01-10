import { Flex, Link } from '@intouchg/components'
import PencilIcon from '@/icons/PencilIcon'
import { getSourceUrl } from '@/api'

const EditDocsLink = ({ href, ...rest }) => (
	<Flex alignItems="center" {...rest}>
		<Link
			href={getSourceUrl({ repo: 'docs', href })}
			target="_blank"
			rel="noopener noreferrer"
			fontSize={1}
		>
			<PencilIcon
				position="relative"
				top="3px"
				width="20px"
				marginRight="12px"
				fill="Highlight Dark"
			/>
			Edit this page
		</Link>
	</Flex>
)

export { EditDocsLink }
