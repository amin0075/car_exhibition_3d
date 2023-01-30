import React from "react";
import Bulb from "./Bulb";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[6, 3, 0]}
        intensity={2}
        shadowMapHeight={2 ** 10}
        shadowMapWidth={2 ** 10}
        castShadow
      />
      <Bulb position={[0, 3, 0]} />
      <Bulb position={[-6, 3, 0]} />
      <Bulb position={[6, 3, 0]} />
    </>
  );
};

export default Lights;
