const timeLimit = (fn, t) => {
	return (...args) => {
		// 執行內部函式 並回傳結果 resolve 或 reject
		return new Promise((resolve, reject) => {
			//這兩個程式是同時進行的，誰先完成就會先解析 Promise
			setTimeout(() => {
				reject('Time Limit Exceeded');
			}, t);
			fn(...args).then(resolve, reject);
		});
	};
};
