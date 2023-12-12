const compose = (functions) => {
	return (x) => {
		for (const fn of functions.reverse()) {
			x = fn(x);
		}
		return x;
	};
};
