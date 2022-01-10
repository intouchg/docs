import { Fragment, useState, useEffect } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import Highlight, { Prism } from 'prism-react-renderer'
import { ThemeProvider } from 'styled-components'
import * as intouchComponents from '@intouchg/components'
import { Box, Text, Stack } from '@intouchg/components'
import theme from 'prism-react-renderer/themes/nightOwl'

/*
	NOTE: highlightLines only works in noPreview mode
*/

const scope = {
	ThemeProvider,
	useState,
	useEffect,
	...intouchComponents,
}

const transformCode = (code) => `<>${code}</>`

const demoTheme = {
	breakpoints: ['30em', '43em', '62em', '82em'],
	space: ['0', '4px', '8px', '16px', '24px', '32px', '48px', '64px', '128px'],
	colors: {
		Primary: '#5e00ff',
		Secondary: '#ffbbf0',
		Tertiary: '#71e0d5',
	},
	fontSizes: [
		'0',
		'1.25rem',
		'1.5rem',
		'1.875rem',
		'2.5rem',
		'4.5rem',
		'6rem',
	],
	headings: {
		Fancy: {
			color: '#5e00ff',
			fontFamily: 'Georgia',
			fontSize: '1.5rem',
			fontStyle: 'oblique',
		},
	},
}

const getLinesToHighlight = (highlightLines) => {
	if (!highlightLines) {
		return undefined
	}

	const linesToHighlight = []

	highlightLines.split(',').forEach((str) => {
		if (str.includes('-')) {
			const [start, end] = str.split('-')

			for (let i = Number(start); i <= Number(end); i++) {
				linesToHighlight.push(i)
			}
		} else {
			linesToHighlight.push(Number(str))
		}
	})

	return linesToHighlight
}

const LiveCode = ({
	children,
	language = 'jsx',
	showError,
	noInline,
	noPreview,
	highlightLines,
}) => {
	const code = children.trim()

	// NOTE: highlightLines only works in noPreview mode
	const linesToHighlight = getLinesToHighlight(highlightLines)

	if (noPreview) {
		return (
			<Box width="100%" fontSize={2} paddingY={5}>
				<Box
					backgroundColor="#011627"
					padding={4}
					borderWidth="5px"
					borderColor="#011627"
					style={{
						whiteSpace: 'pre-wrap',
						wordBreak: 'keep-all',
						overflowWrap: 'break-word',
					}}
				>
					<Highlight
						Prism={Prism}
						code={code}
						theme={theme}
						language={language}
					>
						{({ tokens, getLineProps, getTokenProps }) => (
							<Fragment>
								{tokens.map((line, i) => {
									const lineProps = getLineProps({
										line,
										key: i,
									})

									if (
										linesToHighlight &&
										linesToHighlight.includes(i + 1)
									) {
										lineProps.className = `${lineProps.className} highlight-line`
									}

									return (
										// eslint-disable-next-line react/jsx-key
										<div {...lineProps}>
											{line.map((token, key) => (
												// eslint-disable-next-line react/jsx-key
												<span
													{...getTokenProps({
														token,
														key,
													})}
												/>
											))}
										</div>
									)
								})}
							</Fragment>
						)}
					</Highlight>
				</Box>
			</Box>
		)
	}

	return (
		<Box width="100%" fontSize={3} paddingY={5}>
			<LiveProvider
				code={code}
				scope={scope}
				transformCode={!noInline ? transformCode : undefined}
				theme={theme}
				language={language}
				noInline={noInline}
			>
				{showError && (
					<Box
						as={LiveError}
						padding={4}
						bg="Card"
						color="red"
						overflow="auto"
					/>
				)}
				<Stack alignItems="center">
					<ThemeProvider theme={demoTheme}>
						<LivePreview
							Component={(props) => (
								<Stack
									position="relative"
									alignItems="center"
									justifyContent="center"
									width="100%"
									bg="Card"
									borderWidth="1px"
									borderStyle="solid"
									borderColor="Text"
									padding={6}
									fontFamily="Inter-Black"
									fontSize={1}
									overflow="auto"
									{...props}
								/>
							)}
						/>
					</ThemeProvider>
					<Box
						position="relative"
						width="100%"
						backgroundColor="Text"
						borderWidth="5px"
						borderStyle="solid"
						borderColor="Text"
						sx={{ '&:focus-within': { borderColor: 'Focus' } }}
					>
						<Box
							as={LiveEditor}
							fontSize={2}
							padding="24px"
							fontFamily="Menlo-Regular !important"
						/>
						<Text
							position="absolute"
							top="0"
							right="0"
							padding={2}
							color="#d1dbe7"
							fontFamily="Inter-Black"
							fontSize={1}
							textTransform="uppercase"
							letterSpacing="0.05em"
							style={{ userSelect: 'none' }}
						>
							Live Demo
						</Text>
					</Box>
				</Stack>
			</LiveProvider>
		</Box>
	)
}

export { LiveCode }
