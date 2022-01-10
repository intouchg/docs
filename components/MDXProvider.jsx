/* eslint-disable react/display-name */
import { MDXProvider as BaseMDXProvider } from '@mdx-js/react'
import { LiveCode } from './LiveCode'
import { Code } from './Code'
import * as intouchComponents from '@intouchg/components'
import * as localComponents from '@/components'

const { Heading, Link } = intouchComponents

const mdxComponents = {
	...intouchComponents,
	...localComponents,
	p: localComponents.BodyParagraph,
	ul: localComponents.List,
	a: (props) => <Link variant="Secondary" {...props} />,
	h1: (props) => (
		<Heading fontSize={5} paddingTop={4} paddingBottom={3} {...props} />
	),
	h2: (props) => (
		<Heading fontSize={4} paddingTop={6} paddingBottom={3} {...props} />
	),
	h3: (props) => (
		<Heading fontSize={3} paddingTop={6} paddingBottom={3} {...props} />
	),
	h4: (props) => (
		<Heading fontSize={2} paddingTop={6} paddingBottom={3} {...props} />
	),
	h5: (props) => (
		<Heading fontSize={1} paddingTop={6} paddingBottom={3} {...props} />
	),
	h6: (props) => (
		<Heading
			fontSize="0.875rem"
			paddingTop={6}
			paddingBottom={3}
			{...props}
		/>
	),
	code: LiveCode,
	inlineCode: Code,
}

const MDXProvider = ({ children }) => (
	<BaseMDXProvider components={mdxComponents}>{children}</BaseMDXProvider>
)

export { MDXProvider }
