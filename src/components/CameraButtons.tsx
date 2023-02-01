"use client";

import React from "react";
import state from "@src/store/state";
import * as THREE from "three";

interface ISets {
  1: {
    cameraPos: THREE.Vector3;
    target: THREE.Vector3;
    name: string;
  };
  2: {
    cameraPos: THREE.Vector3;
    target: THREE.Vector3;
    name: string;
  };
}

const style = {
  backgroundColor: "white",
  borderRadius: 99999,
  fontSize: 20,
  fontWeight: "bold",
  border: "1px solid black",
  width: 30,
  height: 30,
  color: "black",
  cursor: "pointer",
};

const CameraButtons = () => {
  const sets = {
    1: {
      // model 3
      cameraPos: [9, 2, 4],
      target: [4, 0, 0],
      name: "Capot001_CAR_PAINT_0",
    },
    2: {
      // model s
      cameraPos: [1, 2, 5],
      target: [-4, 0, 0],
      name: "object005_bod_0",
    },
  };

  const handleClick = (num: number) => {
    // @ts-ignore
    state.cameraPos.set(...sets[num as keyof ISets].cameraPos);
    // @ts-ignore
    state.target.set(...sets[num as keyof ISets].target);
    // @ts-ignore
    state.activeMeshName = sets[num as keyof ISets].name;
    state.shouldUpdate = true;
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 32,
        position: "absolute",
        bottom: "30vh",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1,
      }}
    >
      <button
        onClick={() => handleClick(2)}
        style={{ textAlign: "center", ...style }}
      >
        {"<"}
      </button>
      <button
        onClick={() => handleClick(1)}
        style={{ textAlign: "center", ...style }}
      >
        {">"}
      </button>
    </div>
  );
};

export default CameraButtons;
