import React from "react";

// components
import ThreeFiber from "@src/components/ThreeFiber";
import ColorPicker from "@src/components/ColorPicker";
import CameraButtons from "@src/components/CameraButtons";

const MainPage = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ColorPicker />
      <CameraButtons />
      <ThreeFiber />
    </div>
  );
};

export default MainPage;
