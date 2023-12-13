const addTwoPromises = async (promise1, promise2) => {
	const response = await Promise.all([promise1, promise2]);
	return response[0] + response[1];
};
