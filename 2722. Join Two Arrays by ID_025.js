const join = (arr1, arr2) => {
	const joinedArray = {};

	arr1.forEach((item) => {
		joinedArray[item.id] = item;
	});

	arr2.forEach((item) => {
		if (joinedArray[item.id]) {
			Object.keys(item).forEach((key) => {
				joinedArray[item.id][key] = item[key];
			});
		} else {
			joinedArray[item.id] = item;
		}
	});

	return Object.values(joinedArray);
};
