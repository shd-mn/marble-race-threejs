import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody, useRapier } from '@react-three/rapier';
import { ElementRef, useEffect, useRef } from 'react';

function Player() {
  const ball = useRef<ElementRef<typeof RigidBody> | null>(null);
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();

  useFrame((_, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }
    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }
    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }
    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    ball.current?.applyImpulse(impulse, true);
    ball.current?.applyTorqueImpulse(torque, true);
  });

  useEffect(() => {
    const unsubscribe = subscribeKeys(
      (state) => {
        return state.jump;
      },
      (value) => {
        const origin = ball.current?.translation();
        if (origin) {
          origin.y -= 0.31;
          const direction = { x: 0, y: -1, z: 0 };
          const ray = new rapier.Ray(origin, direction);
          const hit = world.castRay(ray, 10, true);
          if (
            hit &&
            hit.timeOfImpact !== undefined &&
            hit.timeOfImpact < 0.15 &&
            value
          )
            ball.current?.applyImpulse({ x: 0, y: 0.5, z: 0 }, true);
        }
      },
    );
    return () => unsubscribe();
  }, [subscribeKeys, rapier, world]);

  return (
    <RigidBody
      ref={ball}
      colliders="ball"
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
}
export default Player;
