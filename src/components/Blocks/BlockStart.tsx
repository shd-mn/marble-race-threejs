import { boxGeometry } from '../../data/geometries';
import { floor1Material } from '../../data/materials';

type PropTypes = {
  position: [number, number, number];
};

function BlockStart({ position = [0, 0, 0] }: PropTypes) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}
export default BlockStart;
