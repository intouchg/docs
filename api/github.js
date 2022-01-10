// https://github.com/intouchg/theme/tree/master/src
const github = 'https://github.com/intouchg/'

const idsRepos = {
	docs: 'docs/tree/v0.1.0/content/docs',
	components: 'components/tree/v0.1.0/src',
	hooks: 'hooks/tree/master/src',
	theme: 'theme/tree/master/src',
}

export const getSourceUrl = ({ repo, href }) =>
	github + idsRepos[repo] + encodeURIComponent(href)
