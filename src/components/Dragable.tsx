"use client";

import { DragControls } from "three/examples/jsm/controls/DragControls";

import React, { ReactNode, useRef, useEffect, useState } from "react";

import { extend, Object3DNode, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Extend so the reconciler will learn about it
extend({ DragControls });

// Add types to ThreeElements elements so primitives pick up on it
declare module "@react-three/fiber" {
  interface ThreeElements {
    dragControls: Object3DNode<DragControls, typeof DragControls>;
  }
}

interface IProps {
  children: ReactNode;
  groupTransform?: boolean;
}

const Dragable = (props: IProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const dragRef = useRef<DragControls>(null);
  const { camera, gl, scene } = useThree();
  const [children, setChildren] = useState([]);
  useEffect(() => {
    if (groupRef.current && groupRef.current.children) {
      // @ts-ignore
      setChildren(groupRef.current.children);
    }
  }, []);

  useEffect(() => {
    dragRef.current?.addEventListener("hoveron", (e) => {
      //@ts-ignore
      scene.orbitControls.enabled = false;
    });
    dragRef.current?.addEventListener("hoveroff", (e) => {
      //@ts-ignore
      scene.orbitControls.enabled = true;
    });
    dragRef.current?.addEventListener("dragstart", (e) => {
      e.object.api?.mass.set(0);
      // console.log(e.object);
    });
    dragRef.current?.addEventListener("dragend", (e) => {
      e.object.api?.mass.set(1);
    });
    dragRef.current?.addEventListener("drag", (e) => {
      e.object.api?.position.copy(e.object.position);
      e.object.api?.velocity.set(0, 0, 0);
    });
  }, [children]);

  return (
    <group ref={groupRef}>
      <dragControls
        transformGroup={props.groupTransform || false}
        ref={dragRef}
        args={[children, camera, gl.domElement]}
      />
      {props.children}
    </group>
  );
};

export default Dragable;
