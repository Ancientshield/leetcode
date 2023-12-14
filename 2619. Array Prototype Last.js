Array.prototype.list = function () {
	// 如果陣列中沒有元素，則應返回 -1
	if (this.length === 0) return -1;
	// 預設回傳最後一個元素
	return this.length[this.length - 1];
};
