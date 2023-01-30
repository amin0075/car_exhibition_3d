"use client";

import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";

import state, { IState } from "@src/store/state";

interface IProps {}

const CameraControls = (props: IProps) => {
  useFrame(({ camera, scene }) => {
    // @ts-ignore
    if (state.activeMeshName !== state.activeMesh?.name) {
      //@ts-ignore
      state.activeMesh = scene.getObjectByName(state.activeMeshName) || {};
    }
    if (state.shouldUpdate) {
      // @ts-ignore
      camera.position.lerp(state.cameraPos, 0.1);
      // @ts-ignore
      scene.orbitControls.target.lerp(state.target, 0.1);
      //@ts-ignore
      scene.orbitControls.update();
      const diff = camera.position.clone().sub(state.cameraPos).length();
      // console.log(diff);
      if (diff < 0.1) {
        state.shouldUpdate = false;
      }
    }
  });
  return null;
};

export default CameraControls;
