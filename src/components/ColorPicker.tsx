"use client";

import state from "@src/store/state";
import * as THREE from "three";

export default function ColorPicker(props: any) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // @ts-ignore
    if (!state.activeMesh) return;
    // @ts-ignore
    state.activeMesh.material.color = new THREE.Color(
      // @ts-ignore
      e.target.style.background
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        width: "fit-content",
        margin: "auto",
        left: 0,
        right: 0,
        top: 20,
        display: "flex",
      }}
    >
      <div
        onClick={handleClick}
        style={{ background: "orange", width: 50, height: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "yellow", width: 50, height: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "blue", width: 50, height: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "green", width: 50, height: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "white", width: 50, height: 50 }}
      />
      <div
        onClick={handleClick}
        style={{ background: "black", width: 50, height: 50 }}
      />
    </div>
  );
}
