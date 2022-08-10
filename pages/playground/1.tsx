import { css } from '@emotion/react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

function CoinMesh() {
  const mesh = useRef<any>(null)
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.z += 0.01)) // #2

  return (
    <mesh ref={mesh} scale={0.7}>
      <cylinderBufferGeometry args={[1, 1, 0.3, 50]} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <meshLambertMaterial attach="material" color="#ff9800" />
    </mesh>
  )
}

function PlaygroundOne() {
  return (
    <div css={playgroundWrapper}>
      <Canvas
        camera={{
          position: [0, 10, 1],
        }}
      >
        <ambientLight color={'white'} intensity={0.3} />
        <CoinMesh />
      </Canvas>
    </div>
  )
}

const playgroundWrapper = css`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 60vw;
  height: 80vh;
  padding-top: 14rem;
  margin: 0 auto;
`

export default PlaygroundOne
