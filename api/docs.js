import fs from 'fs'
import path from 'path'
import glob from 'glob'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export const getDocData = (slug) => {
	const filepath = path.join(docsDirectory, `${slug}.mdx`)
	const data = fs.readFileSync(filepath)
	return data.toString()
}

export const getDocsPaths = () =>
	new Promise((resolve) => {
		glob(`${docsDirectory}/**/*.mdx`, (error, filepaths) => {
			resolve(
				filepaths.map((filepath) => ({
					params: {
						slug: path
							.normalize(filepath)
							.replace(docsDirectory + path.sep, '')
							.replace(/.mdx$/, '')
							.split(path.sep),
					},
				}))
			)
		})
	})
