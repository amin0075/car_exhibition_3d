"use client";

import React, { useRef, useState } from "react";
import {
  useFrame,
  Euler,
  Vector3,
  Color,
  useLoader,
  ThreeEvent,
} from "@react-three/fiber";
import * as THREE from "three";

// use connon
import { useBox } from "@react-three/cannon";

interface IBoxProps {
  rotation?: Euler;
  position?: Vector3;
  color?: Color;
}

export default function Box(props: IBoxProps) {
  const texture = useLoader(THREE.TextureLoader, "/assets/wood.jpg");
  //@ts-ignore
  const [ref, api] = useBox<THREE.Mesh>(() => ({ mass: 1, ...props }));
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   if (ref.current) {
  //     ref.current.rotation.x += 0.01;
  //     ref.current.rotation.y += 0.01;
  //   }
  // });

  const handlePointerDown = (e: ThreeEvent<MouseEvent>) => {
    // console.log(e);
    // @ts-ignore
    e.object.active = true;
    // @ts-ignore
    if (window.activeMesh) {
      // @ts-ignore
      scaleDown(window.activeMesh);
      // @ts-ignore
      window.activeMesh.active = false;
    }
    // @ts-ignore
    window.activeMesh = e.object;
  };

  const handlePointerEnter = (e: ThreeEvent<PointerEvent>) => {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  };

  const handlePointerLeave = (e: ThreeEvent<PointerEvent>) => {
    // @ts-ignore
    if (!e.object.active) {
      scaleDown(e.object);
    }
  };

  function scaleDown(object: THREE.Object3D<THREE.Event>) {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  }

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      // @ts-ignore
      api={api}
      scale={active ? 1.5 : 1}
      onClick={handlePointerDown}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      castShadow
      // receiveShadow
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
}
