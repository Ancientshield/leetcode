const timeLimit = (fn, t) => {
	return (...args) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				reject('Time Limit Exceeded');
			}, t);

			fn(...args).then(resolve, reject);
		});
	};
};
