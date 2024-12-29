import { RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../../data/geometries';
import { floor1Material } from '../../data/materials';

type PropTypes = {
  position: [number, number, number];
};

function BlockStart({ position = [0, 0, 0] }: PropTypes) {
  return (
    <group position={position}>
      <RigidBody type="fixed">
        <mesh
          geometry={boxGeometry}
          material={floor1Material}
          position={[0, -0.1, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
export default BlockStart;
