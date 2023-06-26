/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 blue_house.gltf --transform
Author: Al-Deezel (https://sketchfab.com/Al-dezel)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blue-house-68850ea8fdb94598bba645f2f231b874
Title: Blue House
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/blue_house-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} scale={0.01} >
        <meshStandardMaterial
        
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/blue_house-transformed.glb')