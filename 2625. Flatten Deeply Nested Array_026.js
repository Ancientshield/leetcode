const flat = (arr, n) => {
	let flatArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (n > 0 && Array.isArray(arr[i])) {
			flatArr.push(...flat(arr[i], n - 1));
		} else {
			flatArr.push(arr[i]);
		}
	}
	return flatArr;
};
