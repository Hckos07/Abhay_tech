'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import type { Points as ThreePoints } from 'three';

function MatrixParticles() {
  const pointsRef = useRef<ThreePoints>(null);
  const particlesPosition = useRef(new Float32Array(300 * 3));

  useEffect(() => {
    for (let i = 0; i < 300 * 3; i += 3) {
      particlesPosition.current[i] = (Math.random() - 0.5) * 2000;
      particlesPosition.current[i + 1] = (Math.random() - 0.5) * 2000;
      particlesPosition.current[i + 2] = (Math.random() - 0.5) * 2000;
    }
  }, []);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;

    const speed = delta * 600;
    const positions = particlesPosition.current;
    for (let i = 0; i < 300; i++) {
      positions[i * 3 + 1] -= speed * (0.5 + Math.random() * 0.5);
      if (positions[i * 3 + 1] < -1000) {
        positions[i * 3 + 1] = 1000;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition.current} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ff00"
        size={5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export function MatrixRain() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1200], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <MatrixParticles />
      </Canvas>
    </div>
  );
}
