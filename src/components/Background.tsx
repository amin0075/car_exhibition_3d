"use client";

import React from "react";
import { Euler, Vector3, Color, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface IBoxProps {
  rotation?: Euler;
  position?: Vector3;
  color?: Color;
}

export default function Background(props: IBoxProps) {
  const { gl } = useThree();

  const texture = useLoader(THREE.TextureLoader, "/assets/autoshop.jpg");
  const formatted = new THREE.WebGLCubeRenderTarget(
    texture.image.height
  ).fromEquirectangularTexture(gl, texture);

  return <primitive attach="background" object={formatted.texture} />;
}
