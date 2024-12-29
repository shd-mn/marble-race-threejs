import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../data/geometries';
import { floor1Material } from '../../data/materials';
import Star from '../Models/Star';

type PropTypes = {
  position: [number, number, number];
};

function BlockEnd({ position = [0, 0, 0] }: PropTypes) {
  return (
    <group position={position}>
      <Star position={[0, 1, 0]} />

      <RigidBody type="fixed">
        <mesh
          geometry={boxGeometry}
          material={floor1Material}
          position={[0, 0, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
export default BlockEnd;
