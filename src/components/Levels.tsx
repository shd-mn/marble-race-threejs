import { useMemo } from 'react';
import BlockStart from './Blocks/BlockStart';
import BlockTrap from './Blocks/BlockTrap';
import BlockEnd from './Blocks/BlockEnd';
import { blockTypes } from '../data/constants';
import Bounds from './Bounds';

type PropTypes = {
  count: number;
};
function Levels({ count }: PropTypes) {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const Trap = blockTypes[Math.floor(Math.random() * blockTypes.length)];
      const position: [number, number, number] = [0, 0, -(i + 1) * 4];

      blocks.push(
        <BlockTrap key={i} position={position}>
          <Trap position={position} />
        </BlockTrap>,
      );
    }
    return blocks;
  }, [count]);

  return (
    <>
      <BlockStart position={[0, 0, 0]} />

      {blocks.map((Component) => {
        return Component;
      })}

      <BlockEnd position={[0, 0, -(count + 1) * 4]} />

      <Bounds length={count + 2} />
    </>
  );
}
export default Levels;
