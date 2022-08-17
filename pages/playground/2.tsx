import { css } from '@emotion/react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function BoxLineMesh() {
  const mesh = useRef<any>(null)
  const seg = useRef<any>(null)

  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  useLayoutEffect(() => {
    seg.current.geometry = new THREE.EdgesGeometry(mesh.current.geometry)
  }, [])

  return (
    <group>
      <mesh ref={mesh} position={[2, 2, 0]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
        <lineSegments ref={seg}>
          <meshBasicMaterial color="black" />
        </lineSegments>
      </mesh>
    </group>
  )
}

function PlaygroundTwo() {
  return (
    <div css={playgroundWrapper}>
      <Canvas
        camera={{
          position: [0, 5, 5],
        }}
      >
        <ambientLight color={'white'} intensity={0.3} />
        <BoxLineMesh />

        <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} />

        {/* <OrbitControls rotateSpeed={2} /> */}
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

export default PlaygroundTwo
