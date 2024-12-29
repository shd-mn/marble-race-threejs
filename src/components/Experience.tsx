import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Levels from './Levels';
import Player from './Player';
import { blockCount } from '../data/constants';
import { Environment } from '@react-three/drei';

export default function Experience() {
  return (
    <>
      <Physics debug>
        <Lights />
        <Levels count={blockCount} />
        <Player />
      </Physics>

      <Environment
        preset="park"
        background
        backgroundBlurriness={0.2}
        environmentIntensity={0.1}
      />
    </>
  );
}
