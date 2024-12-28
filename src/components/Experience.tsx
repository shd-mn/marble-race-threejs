import { OrbitControls } from '@react-three/drei';
import Lights from './Lights';
import Levels from './Levels';

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Lights />

      <Levels />
    </>
  );
}
