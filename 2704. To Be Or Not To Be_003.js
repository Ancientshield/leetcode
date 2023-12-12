const expect = (val) => {
  return {
    toBe: (expected) => {
      if (val !== expected) throw new Error('Not Equal');
      return true;
    },
    notToBe: (expected) => {
      if (val === expected) throw new Error('Equal');
      return true;
    }
  };
};

// throw new Error() 不需要 return
// throw new Error('Equal'); -> { 'error': Equal }
// 物件下的 function 會 return { 'value': true }