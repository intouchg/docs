import styled from 'styled-components'
import { Canvas } from 'react-three-fiber'
import { Effects } from '@react-three/drei'
import { Blobs } from './Blobs'
import { volumetricLight } from '@/shaders'

const CanvasContainer = styled.div`
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	width: 100%;
	height: 100%;
	animation: 1s fade-in ease-in;
`

const IntroAnimation = () => {
	return (
		<CanvasContainer>
			<Canvas colorManagement>
				<color attach="background" args={['#ffffff']} />
				<Blobs />
				<Effects>
					<shaderPass
						renderToScreen
						attachArray="passes"
						args={[volumetricLight]}
					/>
				</Effects>
			</Canvas>
		</CanvasContainer>
	)
}

export { IntroAnimation }
