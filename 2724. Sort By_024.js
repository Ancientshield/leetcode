const sortBy = (arr, fn) => {
	return arr.slice().sort((a, b) => fn(a) - fn(b));
};
// a - b 升冪，b - a 降冪
//
// Array.prototype.slice()
// 沒有傳遞任何參數時，將返回原始陣列的淺拷貝（shallow copy）
