"use client";

import React, { ReactNode } from "react";
import { useFrame, Euler, Vector3, Color } from "@react-three/fiber";
import * as THREE from "three";

// use connon
import { Triplet, useBox } from "@react-three/cannon";

interface IBoxProps {
  offset?: Vector3;
  position?: Triplet;
  dims?: Triplet;
  visible?: boolean;
  children: ReactNode;
}
const BoundingBox = ({
  position = [0, 0, 0],
  children,
  dims = [0, 0, 0],
  offset = [0, 0, 0],
  visible = false,
}: IBoxProps) => {
  const [ref, api] = useBox<THREE.Group>(() => ({
    mass: 1,
    args: dims,
    position: position,
  }));
  return (
    //@ts-ignore
    <group ref={ref} api={api}>
      <mesh scale={dims} visible={visible}>
        <boxBufferGeometry />
        <meshPhysicalMaterial wireframe />
      </mesh>
      <group position={offset}>{children}</group>
    </group>
  );
};

export default BoundingBox;
