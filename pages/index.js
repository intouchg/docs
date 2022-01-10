import dynamic from 'next/dynamic'
import { Box } from '@intouchg/components'
import { Hero } from '@/components/Hero'

const HomeContent = dynamic(() =>
	import('../content/home.mdx').then((module) => module.default)
)

const Home = () => {
	return (
		<Box width="100vw" maxWidth="1400px" marginX="auto">
			<Hero />
			<Box paddingX={6}>
				<HomeContent />
			</Box>
		</Box>
	)
}

export default Home
