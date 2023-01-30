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
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

// use connon
import { useBox } from "@react-three/cannon";

interface IBoxProps {
  rotation?: Euler;
  position?: Vector3;
  color?: Color;
  path: string;
  scale?: number[];
}

export default function Box(props: IBoxProps) {
  const { path, ...rest } = props;
  const model = useLoader(GLTFLoader, path);

  model.scene.traverse((child) => {
    //@ts-ignore
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      //@ts-ignore
      child.material.side = THREE.FrontSide;
    }
  });

  // console.log(model);
  // Return view, these are regular three.js elements expressed in JSX
  return <primitive object={model.scene} {...rest} />;
}
