import { Flex, Link } from '@intouchg/components'
import GithubLogoIcon from '@/icons/GithubLogoIcon'
import { getSourceUrl } from '@/api'

const RepoSourceLink = ({ repo, href, ...rest }) => (
	<Flex alignItems="center" {...rest}>
		<Link
			href={getSourceUrl({ repo, href })}
			target="_blank"
			rel="noopener noreferrer"
			fontSize={1}
		>
			<GithubLogoIcon
				position="relative"
				top="3px"
				width="20px"
				marginRight="12px"
				fill="Highlight Dark"
			/>
			View source code
		</Link>
	</Flex>
)

export { RepoSourceLink }
