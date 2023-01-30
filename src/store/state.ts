import * as THREE from "three";

// model 3 name paint : Capot001_CAR_PAINT_0
// model s name paint : object005_bod_0
export interface IState {
  activeMesh: THREE.Object3D<Event> | {};
  activeMeshName: string;
  cameraPos: THREE.Vector3;
  target: THREE.Vector3;
  shouldUpdate: boolean;
}

const state: IState = {
  activeMesh: {},
  activeMeshName: "Capot001_CAR_PAINT_0",
  cameraPos: new THREE.Vector3(9, 2, 4),
  target: new THREE.Vector3(4, 0, 0),
  shouldUpdate: true,
};

export default state;
