/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 hostel.gltf --transform
Author: Artyom (https://sketchfab.com/Art62)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hostel-15a07825c6bb436fa7a84f95fe06daa4
Title: Hostel
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/hostel-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.polySurface732_obch1_initialShadingGroup_0.geometry} material={materials.obch1_initialShadingGroup} position={[10.97, 0, -53.614]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/hostel-transformed.glb')
