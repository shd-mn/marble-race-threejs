export const randomDirection = () => {
  const random = Math.random();
  const direction = random > 0.5 ? 1 : -1;
  return (random + 0.3) * direction;
};
