import { Flex, Link } from '@intouchg/components'
import IntouchIcon from '@/icons/IntouchIcon'
import pkg from '../package.json'

const Navigation = () => (
	<Flex
		as="nav"
		width="100%"
		padding={6}
		alignItems="center"
		justifyContent="space-between"
	>
		<Flex alignItems="center">
			<IntouchIcon width="40px" mr="16px" pt="2px" />{' '}
			<Link
				href={`https://www.npmjs.com/package/@intouchg/components/v/${pkg.version}`}
			>
				v{pkg.version}
			</Link>
		</Flex>
		<Flex alignItems="center">
			<Link href="/docs/introduction" paddingX={3} textDecoration="none">
				Introduction
			</Link>
			<Link
				href="/docs/getting-started"
				paddingX={3}
				textDecoration="none"
			>
				Getting Started
			</Link>
			<Link href="/docs/api" paddingX={3} textDecoration="none">
				Documentation
			</Link>
		</Flex>
	</Flex>
)

export { Navigation }
