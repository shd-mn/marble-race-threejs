import { Grid } from '@react-three/drei';
import BlockStart from './Blocks/BlockStart';
import { Physics } from '@react-three/rapier';

import BlockTrap from './Blocks/BlockTrap';
import TrapSpinner from './Traps/TrapSpinner';
import TrapLimbo from './Traps/TrapLimbo';
import TrapAxe from './Traps/TrapAxe';
import BlockEnd from './Blocks/BlockEnd';

function Levels() {
  return (
    <>
      <Grid args={[20, 20, 20]} position-y={-0.01} />
      <Physics>
        <BlockStart position={[0, 0, 12]} />

        <BlockTrap position={[0, 0, 8]}>
          <TrapSpinner />
        </BlockTrap>

        <BlockTrap position={[0, 0, 4]}>
          <TrapLimbo position={[0, 0, 4]} />
        </BlockTrap>

        <BlockTrap position={[0, 0, 0]}>
          <TrapAxe position={[0, 0, 0]} />
        </BlockTrap>

        <BlockEnd position={[0, 0, -4]} />
      </Physics>
    </>
  );
}
export default Levels;
