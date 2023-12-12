const map = (arr, fn) => {
  let newArr = [] ;
  for(let i=0; i<arr.length; i++){
    newArr[i] = fn(arr[i], i)
  }
  return newArr;
}