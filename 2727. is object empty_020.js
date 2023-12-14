// 方法ㄧ：比較直觀
// const isEmpty = (obj) => {
// 	if (Array.isArray(obj)) {
// 		return obj.length === 0;
// 	} else if (typeof obj === 'object') {
// 		return Object.keys(obj).length === 0;
// 	} else {
// 		return false;
// 	}
// };

// 方法二：如果 obj 是空的（對象或數組不包含任何屬性或元素），
// 那麼 for...in 內部的代碼永遠不會執行，因為沒有屬性或元素可供遍歷。
// 在這種情況下，函數會直接執行 return true; ，表示 obj 是空的。
// 如果 obj 不是空的（對象或數組包含屬性或元素），
// 那麼 for...in 第一次迭代中會找到一個屬性或元素，
// 然後執行 return false; 返回 false，表示 obj 不是空的。
// 因此，只要 obj 包含屬性或元素，函數就會返回 false。
const isEmpty = (obj) => {
	for (const o in obj) {
		return false;
	}
	return true;
};
