import React, { useEffect } from 'react';
import { useModeContext } from '../../contexts/ModeContext';
import Navbar from '../Navbar/Navbar';
import style from "./scen3d-styles.module.scss";

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import CannonDebugger from 'cannon-es-debugger';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/addons/controls/DragControls.js';

const Scene3D = () => {
  const {
    portfolioMode,
  } = useModeContext();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // const orbitControls = new OrbitControls(camera, renderer.domElement);

    camera.position.z = 15;
    camera.position.y = 6;
    camera.rotation.x = -0.5;

    const onWindowResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update renderer size and camera aspect ratio
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onWindowResize);
    
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(25, 40, 20);
    light.castShadow = true;
    scene.add(light);

    const physicsWorld = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0),
    });

    //const cannonDebugger = new CannonDebugger(scene, physicsWorld, {});

    const ground = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Box(new CANNON.Vec3(30, 0.025, 30)),
    });
    physicsWorld.addBody(ground);
    ground.position.set(0, -0.55, 0);

    const boxMeshes = [];
    const boxBodies = [];

    const createBox = () => {
      const boxShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
      const boxBody = new CANNON.Body({ mass: 10, shape: boxShape });

      const randomX = Math.random() * 10 - 5;
      const randomY = 15;
      const randomZ = Math.random() * 10 - 5;
      boxBody.position.set(randomX, randomY, randomZ);
      
      const initialRotation = new CANNON.Quaternion();
      initialRotation.setFromAxisAngle(new CANNON.Vec3(1.5, 0, 1), Math.PI / Math.random() * 10);
      boxBody.quaternion = initialRotation.mult(boxBody.quaternion);

      const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
      const boxMaterial = new THREE.MeshStandardMaterial({ color: "#909FA2" });
      const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
      boxMesh.receiveShadow = true;

      boxMesh.position.copy(boxBody.position);
      boxMesh.quaternion.copy(boxBody.quaternion);

      if (boxMeshes.length <= 200) scene.add(boxMesh);
      physicsWorld.addBody(boxBody);
      boxMeshes.push(boxMesh);
      boxBodies.push(boxBody);
    };

    const boxCreationInterval = setInterval(createBox, 2000);
    const dragControls = new DragControls(boxMeshes, camera, renderer.domElement);

    dragControls.addEventListener('drag', event => {
      const boxMesh = event.object;
      const boxBody = boxBodies[boxMeshes.indexOf(boxMesh)];
      boxBody.position.copy(boxMesh.position);
      boxBody.quaternion.copy(boxMesh.quaternion);
    });


    function animateLoop() {
      requestAnimationFrame(animateLoop);
      renderer.render(scene, camera);
      //cannonDebugger.update()
      physicsWorld.step(1 / 60)

      // Update box meshes based on the box bodies
      for (let i = 0; i < boxMeshes.length; i++) {
        const boxMesh = boxMeshes[i];
        const boxBody = boxBodies[i];
        boxMesh.position.copy(boxBody.position);
        boxMesh.quaternion.copy(boxBody.quaternion);
      };

      for (let i = 0; i < boxMeshes.length; i++) {
        const boxMesh = boxMeshes[i];
        const boxBody = boxBodies[i];
        boxMesh.position.copy(boxBody.position);
        if (boxMesh.position.y <= -40) {
          scene.remove(boxMesh)
          scene.remove(boxBody)
          boxMeshes.splice(i, 1)
          boxBodies.splice(i, 1)
        }
      }; 
    };

    animateLoop();
  }, []);

  return (
    <div className={style['container']}>
      <Navbar />
      <div id="canvas-container" className={style['container']} style={{ width: '100%', height: '100vh', display: portfolioMode ? 'none' : 'block' }}></div>
    </div>
  )
};

export default Scene3D;
