const compose = (functions) => {
  const composed = (x) => {
    return functions.reduceRight((acc, fn) => {
      return fn.call(null, acc);
    }, x);
  };
  return composed;
};