"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <group ref={groupRef}>
        {/* Solid metallic core */}
        <mesh>
          <icosahedronGeometry args={[2, 0]} />
          <meshStandardMaterial 
            color="#111111" 
            metalness={0.9} 
            roughness={0.1} 
          />
        </mesh>
        {/* Subtle wireframe cage */}
        <mesh>
          <icosahedronGeometry args={[2.05, 0]} />
          <meshBasicMaterial 
            color="#ffffff" 
            wireframe={true} 
            transparent 
            opacity={0.15} 
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-full min-h-[300px] lg:min-h-[500px] relative pointer-events-none">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-5, -10, -5]} intensity={0.5} color="#aaaaaa" />
        <Environment preset="city" />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
