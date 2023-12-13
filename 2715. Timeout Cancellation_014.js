const cancellable = (fn, args, t) => {
	const timer = setTimeout(() => fn(...args), t);
	return () => {
		clearTimeout(timer);
	};
};

// setTimeout(code, delay);
// learTimeout(timeoutID); // 此題當中為 timer
