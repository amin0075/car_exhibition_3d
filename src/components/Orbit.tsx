"use client";

import React from "react";
import { extend, Object3DNode, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Extend so the reconciler will learn about it
extend({ OrbitControls });

// Add types to ThreeElements elements so primitives pick up on it
declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>;
  }
}

export default function Orbit() {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach="orbitControls" args={[camera, gl.domElement]} />
  );
}
