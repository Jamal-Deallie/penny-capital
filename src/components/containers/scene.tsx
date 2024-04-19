'use client';

import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { OldPenny } from '@/components';

const Scene = () => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 2] }}>
        <color attach='background' args={['#FCEFDF']} />
        <OrbitControls minDistance={2} maxDistance={2} />
        <Environment preset={'apartment'} resolution={512} />

        <ambientLight intensity={0.2} />
        <directionalLight position={[-5, 5, 5]} intensity={0.7} color='black' />
        <OldPenny />
      </Canvas>
    </>
  );
};

export default Scene;
