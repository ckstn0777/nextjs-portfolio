import { css } from '@emotion/react'
import { useEffect, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import useKeyboardControls from '../../hooks/useKeyboardControls'

function Plane() {
  const [mesh] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }))

  return (
    <>
      {/*@ts-ignore*/}
      <mesh ref={mesh} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="#171717" transparent opacity={0.4} />
      </mesh>
    </>
  )
}

function Cube({ position }: { position: [x: number, y: number, z: number] }) {
  const [mesh, api] = useBox(() => ({
    mass: 10,
    rotation: [0.4, 0.2, 0.5],
    type: 'Dynamic',
    position: position,
  }))

  return (
    <>
      {/*@ts-ignore*/}
      <mesh castShadow ref={mesh}>
        <boxGeometry />
        <meshLambertMaterial color="hotpink" />
      </mesh>
    </>
  )
}

function PlaygroundTwo() {
  return (
    <div css={playgroundWrapper}>
      <Canvas
        camera={{
          position: [0, 5, 5],
        }}
        shadows
      >
        <color attach="background" args={['white']} />

        <ambientLight intensity={0.8} />
        <directionalLight
          position={[10, 10, 10]}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />

        <Physics>
          <Plane />
          <Cube position={[0, 5, 0]} />
          <Cube position={[1, 10, -1]} />
          <Cube position={[-1, 20, 1]} />
        </Physics>

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
