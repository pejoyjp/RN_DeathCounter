import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';


export default function Hourglass() {
  const obj = useLoader(OBJLoader,require('../assets/hourglass/hourglass.obj'));
  
  return (
    <mesh>
      <primitive object={obj} scale={10} />
    </mesh>
  )
}

const styles = StyleSheet.create({})