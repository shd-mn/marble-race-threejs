import { Canvas } from '@react-three/fiber';
import { CameraType } from './interfaces/camera.interfaces';
import Experience from './components/Experience';

const cameraSetting: CameraType = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [2.5, 4, 6],
};

function App() {
  return (
    <Canvas shadows camera={cameraSetting}>
      <Experience />
    </Canvas>
  );
}

export default App;
