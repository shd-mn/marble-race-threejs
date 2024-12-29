import React from 'react';
import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../data/geometries';
import { floor2Material } from '../../data/materials';

type PropTypes = {
  position: [number, number, number];
  children: React.ReactNode;
};

function BlockTrap({ position = [0, 0, 0], children }: PropTypes) {
  return (
    <group position={position}>
      {children}
      <RigidBody type="fixed">
        <mesh
          geometry={boxGeometry}
          material={floor2Material}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
export default BlockTrap;
