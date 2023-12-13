const reduce = (nums, fn, init) => {
	let accum = init;
	// for(let i=0; i<nums.length; i++){
	//   accum = fn(accum, nums[i]);
	// }
	for (const n of nums) {
		accum = fn(accum, n);
	}
	return accum;
};
