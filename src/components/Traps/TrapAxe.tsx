import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { ElementRef, useRef, useState } from 'react';
import * as THREE from 'three';
import { boxGeometry } from '../../data/geometries';
import { obstacleMaterial } from '../../data/materials';

type PropTypes = {
  position: [number, number, number];
};
function TrapAxe({ position }: PropTypes) {
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2);
  const trapRef = useRef<ElementRef<typeof RigidBody> | null>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const x = Math.sin(time + timeOffset) * 1.25;

    if (trapRef.current) {
      const euler = new THREE.Euler(
        position[0] + x,
        position[1] + 0.75,
        position[2],
      );
      trapRef.current.setNextKinematicTranslation(euler);
    }
  });

  return (
    <RigidBody
      ref={trapRef}
      type="kinematicPosition"
      position={[0, 0.3, 0]}
      restitution={0.2}
      friction={0}
    >
      <mesh
        geometry={boxGeometry}
        material={obstacleMaterial}
        scale={[1.5, 1.5, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
}
export default TrapAxe;
