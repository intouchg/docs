import React, { useRef } from 'react'
import { useThree, useFrame } from 'react-three-fiber'
import { raymarchBlobs } from '@/shaders'

const shader = raymarchBlobs([
	{
		color: 0x0044ff,
		pos: [1.0, 1.0, 1.0],
		speed: 0.8,
	},
	{
		color: 0x8400ff,
		pos: [1.0, -0.5, -1.0],
		speed: 0.6,
	},
	{
		color: 0x00ff00,
		pos: [-0.8, 1.0, -0.5],
		speed: 1.0,
	},
	{
		color: 0xff9900,
		pos: [-0.4, -1.0, 0.5],
		speed: 0.7,
	},
	{
		color: 0xff007b,
		pos: [-0.5, 0.7, 1.0],
		speed: 0.5,
	},
])

const Blobs = () => {
	const { size } = useThree()
	const shaderMaterial = useRef()

	useFrame(({ clock }) => {
		shaderMaterial.current.uniforms.time.value = clock.getElapsedTime()
		shaderMaterial.current.uniforms.resolution.value = [
			size.width,
			size.height,
		]
	})

	return (
		<mesh>
			<planeBufferGeometry attach="geometry" args={[2, 2]} />
			<shaderMaterial
				transparent
				attach="material"
				args={[shader]}
				ref={shaderMaterial}
			/>
		</mesh>
	)
}

export { Blobs }
