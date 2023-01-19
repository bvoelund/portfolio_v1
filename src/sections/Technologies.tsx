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
import MirrorCube from "../components/mirrorCube/MirrorCube";

// bg-gradient-to-b from-[#118AB2] to-[#2795B9]

export default function Technologies() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="w-1/2"></div>
      {/* <div className="h-[600px] w-[450px] p-10">
        <MirrorCube />
      </div> */}
    </div>
  );
}
