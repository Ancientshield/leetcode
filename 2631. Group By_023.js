Array.prototype.groupBy = function (fn) {
	// 創建一個空物件來儲存分組後的元素
	const group = {};

	// 遍歷陣列中的每個 e 元素(element)
	for (let e of this) {
		// 使用提供的回調函數(fn)獲取當前元素的鍵值
		const key = fn(e);

		// 如果在 group 物件中該鍵不存在，則為該鍵創建一個空陣列
		group[key] || (group[key] = []);

		// 將當前元素推送到與其鍵值對應的陣列中
		group[key].push(e);
	}

	// 回傳最終的分組物件
	return group;
};
