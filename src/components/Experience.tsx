import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import Lights from './Lights';
import Levels from './Levels';
import Player from './Player';
import { blockCount } from '../data/constants';

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Physics debug>
        <Lights />
        <Levels count={blockCount} />
        <Player />
      </Physics>
    </>
  );
}
