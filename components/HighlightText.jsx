import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button } from '@intouchg/components'
import LinkIcon from '@/icons/LinkIcon'

const getClientRect = (node) => {
	if (node.nodeType === 3) {
		const range = document.createRange()
		range.selectNodeContents(node)
		const rects = range.getClientRects()
		return rects[0]
	}

	return node.getBoundingClientRect()
}

const createXpath = (node) => {
	if (node.id) {
		return `id("${node.id}")`
	}

	if (node === document.body) {
		return node.tagName
	}

	const siblings = node.parentNode.childNodes

	for (let i = 0, j = 0; i < siblings.length; i++) {
		const sibling = siblings[i]

		if (sibling === node) {
			return `${createXpath(node.parentNode)}/${
				node.tagName || 'text()'
			}[${j + 1}]`
		}

		if (
			(sibling.nodeType === 1 && sibling.tagName === node.tagName) ||
			(sibling.nodeType === 3 && node.nodeType === 3)
		) {
			j++
		}
	}
}

const getNodeByXpath = (xpath) => {
	const result = document.evaluate(
		xpath,
		document.body,
		null,
		XPathResult.FIRST_ORDERED_NODE_TYPE
	)
	return result.resultType === 9 ? result.singleNodeValue : null
}

const copyPermalink = (selection) => {
	const anchorXpath = encodeURIComponent(createXpath(selection.anchorNode))
	const focusXpath = encodeURIComponent(createXpath(selection.focusNode))
	navigator.clipboard.writeText(
		`${window.location.origin}${window.location.pathname}?anchor=${anchorXpath}&anchorOffset=${selection.anchorOffset}&focus=${focusXpath}&focusOffset=${selection.focusOffset}`
	)
}

const HighlightText = () => {
	const router = useRouter()
	const [selection, setSelection] = useState({
		anchorNode: null,
		anchorOffset: 0,
		focusNode: null,
		focusOffset: 0,
		rangeCount: 0,
		type: '',
		string: '',
	})

	useEffect(() => {
		if (router?.query) {
			const { anchor, anchorOffset, focus, focusOffset } = router.query

			if (anchor && focus) {
				const anchorNode = getNodeByXpath(anchor)
				const focusNode = getNodeByXpath(focus)

				if (anchorNode && focusNode) {
					const firstNode =
						anchorNode.compareDocumentPosition(focusNode) &
						Node.DOCUMENT_POSITION_PRECEDING
							? focusNode
							: anchorNode
					const rect = getClientRect(firstNode)
					window
						.getSelection()
						.setBaseAndExtent(
							anchorNode,
							anchorOffset,
							focusNode,
							focusOffset
						)
					window.scrollTo(rect.x, rect.y)
				}
			}
		}
	}, [router])

	useEffect(() => {
		const handleTextSelect = (event) => {
			const selectionData = window.getSelection()
			const {
				anchorNode,
				anchorOffset,
				focusNode,
				focusOffset,
				rangeCount,
				type,
			} = selectionData
			setSelection({
				anchorNode,
				anchorOffset,
				focusNode,
				focusOffset,
				rangeCount,
				type,
				string: selectionData.toString(),
			})
		}

		document.addEventListener('selectionchange', handleTextSelect)
		return () =>
			document.removeEventListener('selectionchange', handleTextSelect)
	}, [])

	const nodeOrder =
		selection.anchorNode && selection.focusNode
			? selection.anchorNode.compareDocumentPosition(selection.focusNode)
			: -1
	const lastNode =
		nodeOrder === -1
			? null
			: nodeOrder & Node.DOCUMENT_POSITION_PRECEDING
			? selection.anchorNode
			: selection.focusNode
	const rect = !lastNode ? null : getClientRect(lastNode)
	const hide =
		!rect ||
		selection.string === '' ||
		!selection.rangeCount ||
		selection.type !== 'Range'

	return (
		<Button
			invisible
			zIndex="9999"
			position="absolute"
			padding={2}
			borderRadius="6px"
			border="1px solid"
			borderColor="Highlight Dark"
			bg="Highlight Light"
			boxShadow="1px 2px 5px rgba(57, 77, 106, 0.8)"
			style={{
				display: hide ? 'none' : 'flex',
				top: rect ? rect.top + window.scrollY : 0,
				left: rect ? rect.right + window.scrollX + 11 : 0,
			}}
			onClick={() => copyPermalink(selection)}
		>
			<LinkIcon width="22px" fill="Highlight Dark" />
		</Button>
	)
}

export { HighlightText }
