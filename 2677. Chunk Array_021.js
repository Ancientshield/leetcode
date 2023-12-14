const chunk = (arr, size) => {
	let chunkArr = [];
	let index = 0;
	while (index < arr.length) {
		chunkArr.push(arr.slice(index, size + index));
		index += size;
	}
	return chunkArr;
};

// 一般迴圈：
// const chunk = (arr, size) => {
//   const chunkArr = [];
//         // 若要用迴圈，要要注意這裡是 i < n
//   for (let i = 0, n = arr.length; i < n; i += size) {
//     chunkArr.push(arr.slice(i, i + size));
//   }
//   return chunkArr;
// };
