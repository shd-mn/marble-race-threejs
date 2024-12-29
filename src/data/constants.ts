import TrapAxe from '../components/Traps/TrapAxe';
import TrapLimbo from '../components/Traps/TrapLimbo';
import TrapSpinner from '../components/Traps/TrapSpinner';
import { CameraType } from '../interfaces/camera.interfaces';

export const blockCount = 5;

export const blockTypes = [TrapSpinner, TrapLimbo, TrapAxe];

export const cameraSetting: CameraType = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [2.5, 4, 6],
};

export const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
];
