import { Vector2 } from 'three'
import vertexShader from './shader.vert'
import fragmentShader from './shader.frag'

const volumetricLight = {
	uniforms: {
		tDiffuse: { value: 10 },
		lightPosition: { value: new Vector2(0.75, 0.25) },
		exposure: { value: 0.17 },
		decay: { value: 0.15 },
		density: { value: 0.5 },
		weight: { value: 5 },
		samples: { value: 100 },
	},
	vertexShader,
	fragmentShader,
}

export { volumetricLight }
