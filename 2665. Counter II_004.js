const createCounter = (init) => {
  let count = init || 0;

  const increment = () => {
    count++;
    return count;
  };

  const decrement = () => {
    count--;
    return count;
  };

  const reset = () => {
    count = init || 0;
    return count;
  };

  return { increment, decrement, reset };
};