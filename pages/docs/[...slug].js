import MDXRenderer from '@mdx-js/runtime'
import { getDocData, getDocsPaths } from '@/api'
import { Flex, Box } from '@intouchg/components'
import { HighlightText } from '@/components/HighlightText'
import DocsNavigation from '@/content/docs-nav.mdx'

export const getStaticProps = async (context) => ({
	props: {
		mdx: getDocData(context.params.slug.join('/')),
	},
})

export const getStaticPaths = async () => ({
	paths: await getDocsPaths(),
	fallback: false,
})

const Page = ({ mdx }) => {
	return (
		<Flex justifyContent="center">
			<Box flex="1" maxWidth="260px" paddingTop={8} paddingLeft={6}>
				<Box height="100vh" overflow="auto" position="sticky" top="0">
					<Box paddingY={6} style={{ userSelect: 'none' }}>
						<DocsNavigation />
					</Box>
				</Box>
			</Box>
			<Box
				id="mdx"
				width="80ch"
				maxWidth="100vw"
				paddingTop={7}
				marginX={7}
				marginBottom={8}
				fontSize={2}
			>
				<MDXRenderer>{mdx}</MDXRenderer>
			</Box>
			<HighlightText />
			<Box flex="1" maxWidth="260px" />
		</Flex>
	)
}

export default Page
