"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useScroll } from "framer-motion";

function ScrollLinkedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const { scrollYProgress } = useScroll();

  useFrame((state) => {
    if (!meshRef.current || !wireframeRef.current) return;
    
    // Get the current scroll progress (0 to 1)
    const progress = scrollYProgress.get();

    // Target values
    let targetX = 3;
    let targetY = 0;
    let targetZ = 0;
    let targetScale = 1;
    let targetRotationX = progress * Math.PI * 4;
    let targetRotationY = progress * Math.PI * 2;
    let targetDistort = 0.2;

    if (progress < 0.3) {
      // Hero to About
      const p = progress / 0.3; // 0 to 1
      targetX = 3 - (p * 6); // 3 to -3
      targetScale = 1 + (p * 0.5); // 1 to 1.5
    } else if (progress < 0.6) {
      // About to Projects
      const p = (progress - 0.3) / 0.3; // 0 to 1
      targetX = -3 + (p * 3); // -3 to 0
      targetZ = p * -15; // push back deeply
      targetScale = 1.5 - (p * 0.5); // back to 1
      targetDistort = 0.2 + (p * 0.5); // Distort more
    } else {
      // Projects to Contact
      const p = (progress - 0.6) / 0.4; // 0 to 1
      targetX = 0;
      targetZ = -15 + (p * 20); // bring forward massively (passes the camera)
      targetScale = 1 + (p * 3); // scale up massively
      targetDistort = 0.7 - (p * 0.5); // Smooth out
    }

    // Smoothly interpolate current values to targets
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.05);
    
    wireframeRef.current.position.copy(meshRef.current.position);

    const scaleLerp = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05);
    meshRef.current.scale.set(scaleLerp, scaleLerp, scaleLerp);
    wireframeRef.current.scale.set(scaleLerp + 0.02, scaleLerp + 0.02, scaleLerp + 0.02);

    meshRef.current.rotation.x = targetRotationX;
    meshRef.current.rotation.y = targetRotationY;
    wireframeRef.current.rotation.x = targetRotationX;
    wireframeRef.current.rotation.y = targetRotationY;

    // Update material distort if possible
    const material = meshRef.current.material as any;
    if (material.distort !== undefined) {
      material.distort = THREE.MathUtils.lerp(material.distort, targetDistort, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <MeshDistortMaterial 
          color="#0d0d1a"
          emissive="#7b2fff"
          emissiveIntensity={0.1}
          roughness={0.2}
          metalness={0.8}
          distort={0.2}
          speed={2}
        />
      </mesh>
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.15} />
      </mesh>
    </Float>
  );
}

export default function Global3DCanvas() {
  return (
    <div className="fixed inset-0 z-[-5] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#00f5ff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#7b2fff" />
        <Environment preset="city" />
        <ScrollLinkedShape />
      </Canvas>
    </div>
  );
}
