const debounce = (fn, t) => {
	let timer;

	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, t);
	};
};
