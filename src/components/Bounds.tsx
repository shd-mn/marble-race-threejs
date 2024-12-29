import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { boxGeometry } from '../data/geometries';
import { wallMaterial } from '../data/materials';

function Bounds({ length = 1 }: { length: number }) {
  return (
    <RigidBody type="fixed" restitution={0.2} friction={0}>
      <mesh
        position={[2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, length * 4]}
        castShadow
      />
      <mesh
        position={[-2.15, 0.75, -(length * 2) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        scale={[0.3, 1.5, length * 4]}
        castShadow
      />
      <mesh
        position={[0, 0.75, -(length * 4) + 2]}
        geometry={boxGeometry}
        material={wallMaterial}
        rotation-y={Math.PI * 0.5}
        scale={[0.3, 1.5, 4]}
        castShadow
      />
      {/* Floor Collider */}
      <CuboidCollider
        args={[2, 0.1, length * 2]}
        position={[0, -0.1, -(length * 2) + 2]}
        restitution={0.2}
        friction={1}
      />
    </RigidBody>
  );
}
export default Bounds;
