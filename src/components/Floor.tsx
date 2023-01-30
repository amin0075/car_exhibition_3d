"use client";

import { Euler, Vector3, Color } from "@react-three/fiber";

// use connon
import { useBox } from "@react-three/cannon";

interface IBoxProps {
  rotation?: Euler;
  position?: Vector3;
  color?: Color;
}

export default function Floor(props: IBoxProps) {
  //@ts-ignore
  const [ref, api] = useBox<THREE.Mesh>(() => ({
    args: [20, 1, 20],
    ...props,
  }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 1, 200]} />
      <meshPhysicalMaterial transparent opacity={0.2} />
    </mesh>
  );
}
