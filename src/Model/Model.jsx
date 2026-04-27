

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/Chill Guy.glb')
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.ChillGuy.geometry} material={materials['Chill Guy']} />
    </group>
  )
}

useGLTF.preload('/Chill Guy.glb')