"use client";

import { Euler, Vector3, Color } from "@react-three/fiber";
import * as THREE from "three";

interface IBoxProps {
  rotation?: Euler;
  position?: Vector3;
  color?: Color;
}

export default function Bulb(props: IBoxProps) {
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props}>
      <pointLight
        intensity={0.5}
        castShadow
        // shadow={{
        //   mapSize: new THREE.Vector2(2 ** 10, 2 ** 10),
        //   radius: 10,
        // }}
        shadowMapHeight={2 ** 10}
        shadowMapWidth={2 ** 10}
        // @ts-ignore
        shadowRadius={10}
      />
      <sphereBufferGeometry args={[0.2, 100, 100]} />
      <meshPhongMaterial emissive="white" />
    </mesh>
  );
}
