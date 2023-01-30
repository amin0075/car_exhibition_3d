"use client";

import React from "react";
import * as THREE from "three";

const THREEJs = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  const renderer = new THREE.WebGL1Renderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.innerHTML = "";
  document.body.appendChild(renderer.domElement);

  // add mesh
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: "blue" });
  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  animate();
  return null;
};

export default THREEJs;
