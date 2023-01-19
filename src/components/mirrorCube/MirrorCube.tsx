import React, { useRef, useState, Suspense } from "react";
import {
  ContactShadows,
  Float,
  OrbitControls,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ThreeModel() {
  const gltf = useLoader(GLTFLoader, "/MirrorCubeMat.gltf");
  const matcap = useTexture("./matcap.png");
  console.log(gltf);
  return (
    <>
      <hemisphereLight args={["#fff", "#333", 0.7]} />
      <directionalLight intensity={0.1} castShadow position={[-5, -5, -6.5]} />

      <Float
        speed={2}
        rotationIntensity={1.5}
        position={[0, 0.1, 0]}
        floatIntensity={4}
        scale={0.3}
      >
        <Suspense fallback={null}>
          <primitive object={gltf.scene} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Float>
    </>
  );
}

export default function MirrorCube() {
  return (
    <Canvas className="flex h-auto items-center justify-center rounded-full bg-lightBlue lg:max-h-[400px] lg:max-w-[400px]">
      <ThreeModel />
    </Canvas>
  );
}
