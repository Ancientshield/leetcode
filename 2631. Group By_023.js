Array.prototype.groupBy = function (fn) {
	const group = {};
	// 分組邏輯
	for (let e of this) {
		const key = fn(e);
		// 使用 object[key] 訪問屬性，如果不存在，則group[key] 賦值為空陣列 []
		group[key] || (group[key] = []);
		// 把原始陣列元素 push 到對應的 grouped[key] 內
		group[key].push(e);
	}
	return group;
};
