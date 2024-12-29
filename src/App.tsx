import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { cameraSetting, keyboardMap } from './data/constants';
import { KeyboardControls } from '@react-three/drei';

function App() {
  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas shadows camera={cameraSetting}>
        <Experience />
      </Canvas>
    </KeyboardControls>
  );
}

export default App;
