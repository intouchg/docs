import { Stack, Heading, Text } from '@intouchg/components'

const Error = ({ statusCode }) => (
	<Stack height="100vh" alignItems="center" justifyContent="center">
		<Heading>Error</Heading>
		<Text>
			{statusCode
				? `An error ${statusCode} occurred on server`
				: 'An error occurred on client'}
		</Text>
	</Stack>
)

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error
