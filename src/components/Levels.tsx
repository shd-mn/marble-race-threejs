import { Grid } from '@react-three/drei';
import BlockStart from './Blocks/BlockStart';
import { Physics } from '@react-three/rapier';

import BlockTrap from './Blocks/BlockTrap';
import TrapSpinner from './Traps/TrapSpinner';

function Levels() {
  return (
    <>
      <Grid args={[20, 20, 20]} position-y={-0.01} />
      <Physics>
        <BlockStart position={[0, 0, 0]} />

        <BlockTrap position={[0, 0, -4]}>
          <TrapSpinner />
        </BlockTrap>
      </Physics>
    </>
  );
}
export default Levels;
