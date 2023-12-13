const once = (fn) => {
	// 設置 flag
	let called = false;
	let result;
	return (...args) => {
		if (!called) {
			result = fn(...args);
			// 第一個 fn 執行完後打開 flag
			called = true;
			return result;
		}
	};
};
