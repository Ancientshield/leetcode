const promiseAll = (functions) => {
	return new Promise((resolve, reject) => {
		const results = [];
		let resolvedCount = 0;

		//解析functions數組的邏輯
		for (let i = 0; i < functions.length; i++) {
			// 使用  IIFE（Immediately Invoked Function Expression）傳遞 i 值
			(() => {
				functions[i]()
					.then((result) => {
						results[i] = result;
						resolvedCount++;
						// 必須要所有的 promise 都是 resolve，resolvedCount 才會等於 functions.length
						if (resolvedCount === functions.length) {
							resolve(results);
						}
					})
					.catch((error) => {
						reject(error);
					});
			})(i);
		}
	});
};
