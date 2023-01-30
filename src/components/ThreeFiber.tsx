"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

// use connon
import { Physics } from "@react-three/cannon";

// components
import Background from "@src/components/Background";
import Floor from "@src/components/Floor";
import Orbit from "@src/components/Orbit";
import Cars from "@src/components/Cars";
import CameraControls from "@src/components/CameraControls";
import Lights from "@src/components/Lights";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

// "three": "^0.149.0",
const ThreeFiber = () => {
  return (
    <Canvas
      shadows
      // style={{ background: "black" }}
      camera={{ position: [7, 7, 7], zoom: 1 }}
    >
      <CameraControls />
      <Lights />
      {/* <fog args={["white", 1, 50]} attach="fog" /> */}
      <Physics>
        <Cars />
        <Floor position={[0, -0.5, 0]} />
      </Physics>

      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <axesHelper args={[5]} />
      <Orbit />
      <EffectComposer>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </Canvas>
  );
};

export default ThreeFiber;
