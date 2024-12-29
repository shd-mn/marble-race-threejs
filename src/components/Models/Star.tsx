import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

type PropTypes = {
  position: [number, number, number];
};

function Star({ position }: PropTypes) {
  const { scene } = useGLTF('./assets/models/star.gltf');

  scene.children.forEach((mesh) => {
    mesh.castShadow = true;
  });

  const starRef = useRef<THREE.Object3D>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scale = Math.abs(Math.sin(time) * 0.5) + 0.9;

    if (starRef.current) {
      starRef.current.rotation.y = time;
      starRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <primitive castShadow ref={starRef} object={scene} position={position} />
  );
}

export default Star;
