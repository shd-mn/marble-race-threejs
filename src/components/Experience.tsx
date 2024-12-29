import { OrbitControls } from '@react-three/drei';
import Lights from './Lights';
import Levels from './Levels';
import { blockCount } from '../data/constants';

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Lights />

      <Levels count={blockCount} />
    </>
  );
}
