import React from 'react';
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

      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}
export default BlockTrap;
