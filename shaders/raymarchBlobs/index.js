import vertexShader from './shader.vert'
import fragmentShader from './shader.frag'

const defaultBlobs = [
	{
		color: 0xffb6b9,
		pos: [1.0, 1.0, 1.0],
		speed: 0.8,
	},
	{
		color: 0xfae3d9,
		pos: [1.0, -0.5, -1.0],
		speed: 0.6,
	},
	{
		color: 0xbbded6,
		pos: [-0.8, 1.0, -0.5],
		speed: 1.0,
	},
	{
		color: 0x8ac6d1,
		pos: [-0.4, -1.0, 0.5],
		speed: 0.7,
	},
	{
		color: 0xfffcab,
		pos: [-0.5, 0.7, 1.0],
		speed: 0.5,
	},
]

const hexColorToRGB = (hex) => {
	hex = Math.floor(hex)
	const r = ((hex >> 16) & 255) / 255
	const g = ((hex >> 8) & 255) / 255
	const b = (hex & 255) / 255

	return [r, g, b]
}

const raymarchBlobs = (blobs = defaultBlobs) => ({
	uniforms: {
		time: { value: 0.0 },
		resolution: { value: [0, 0] },
		blobs: {
			value: blobs.map((blob) => ({
				...blob,
				color: hexColorToRGB(blob.color),
			})),
		},
	},
	vertexShader,
	fragmentShader,
})

export { raymarchBlobs }
