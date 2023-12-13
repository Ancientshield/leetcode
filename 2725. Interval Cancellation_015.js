const cancellable = (fn, args, t) => {
	// 第一次執行
	fn(...args);
	const timer = setInterval(() => fn(...args), t);

	const cancelFn = () => {
		clearInterval(timer);
	};
	return cancelFn;
	// 也可直接 return function，但依題意，還是命名 cancelFn
	// return () => clearInterval(timer);
};
