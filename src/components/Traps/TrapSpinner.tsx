import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { ElementRef, useRef, useState } from 'react';
import * as THREE from 'three';
import { boxGeometry } from '../../data/geometries';
import { obstacleMaterial } from '../../data/materials';
import { randomDirection } from '../../utils';
function TrapSpinner() {
  const [speed] = useState(randomDirection);

  const twisted = useRef<ElementRef<typeof RigidBody> | null>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (twisted.current) {
      const euler = new THREE.Euler(0, time * speed, 0);
      const rotation = new THREE.Quaternion();
      rotation.setFromEuler(euler);
      twisted.current.setNextKinematicRotation(rotation);
    }
  });

  return (
    <RigidBody
      ref={twisted}
      type="kinematicPosition"
      position={[0, 0.3, 0]}
      restitution={0.2}
      friction={0}
    >
      <mesh
        geometry={boxGeometry}
        material={obstacleMaterial}
        scale={[3.5, 0.3, 0.3]}
        castShadow
        receiveShadow
      />
    </RigidBody>
  );
}
export default TrapSpinner;
