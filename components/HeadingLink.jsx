import styled from 'styled-components'
import { Flex, Heading, Link, fontSize, space } from '@intouchg/components'
import LinkIcon from '@/icons/LinkIcon'

const HeadingLinkContainer = styled(Flex)`
	align-items: baseline;

	h1 {
		font-size: ${fontSize(5)};
		padding-top: ${space(4)};
		padding-bottom: ${space(3)};
	}

	h2 {
		font-size: ${fontSize(4)};
		padding-top: ${space(6)};
		padding-bottom: ${space(3)};
	}

	h3 {
		font-size: ${fontSize(3)};
		padding-top: ${space(6)};
		padding-bottom: ${space(3)};
	}

	h4 {
		font-size: ${fontSize(2)};
		padding-top: ${space(6)};
		padding-bottom: ${space(3)};
	}

	h5 {
		font-size: ${fontSize(1)};
		padding-top: ${space(6)};
		padding-bottom: ${space(3)};
	}

	h6 {
		font-size: 0.875rem;
		padding-top: ${space(6)};
		padding-bottom: ${space(3)};
	}
`

const HeadingLink = ({ children, slug, ...rest }) => {
	const permalink =
		typeof window === 'undefined'
			? ''
			: window.location.origin + window.location.pathname + '#' + slug

	return (
		<HeadingLinkContainer>
			<Heading id={slug} {...rest}>
				{children}
			</Heading>
			<Link
				href={'#' + slug}
				onClick={() => navigator.clipboard.writeText(permalink)}
			>
				<LinkIcon width="22px" marginLeft={2} fill="Highlight Dark" />
			</Link>
		</HeadingLinkContainer>
	)
}

export { HeadingLink }
