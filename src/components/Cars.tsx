import React, { Suspense } from "react";
import Dragable from "@src/components/Dragable";
import Model from "@src/components/Model";
import BoundingBox from "@src/components/BoundingBox";

interface IBoxProps {}
const Cars = ({}: IBoxProps) => {
  return (
    <>
      <Suspense fallback={null}>
        <Dragable groupTransform>
          <BoundingBox
            dims={[3, 2, 6]}
            position={[4, 6, 0]}
            offset={[0, -0.4, 0.8]}
            // visible
          >
            <Model
              scale={Array(3).fill(0.01)}
              // position={[-4, 0.6, 0]}
              path="/assets/tesla_model_3/scene.gltf"
            />
          </BoundingBox>
        </Dragable>
      </Suspense>
      <Suspense fallback={null}>
        <Dragable groupTransform>
          <BoundingBox
            dims={[3, 2, 7]}
            position={[-4, 6, 0]}
            offset={[0, -0.8, 0.3]}
            // visible
          >
            <Model
              scale={Array(3).fill(0.013)}
              // position={[4, 0.3, 0]}
              path="/assets/tesla_model_s/scene.gltf"
            />
          </BoundingBox>
        </Dragable>
      </Suspense>
    </>
  );
};

export default Cars;
