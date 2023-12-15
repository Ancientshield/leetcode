class ArrayWrapper {
	constructor(nums) {
		this.nums = nums;
	}
	valueOf() {
		const flattenArray = this.nums.flat(1);
		return flattenArray.reduce((sum, num) => sum + num, 0);
	}
	toString() {
		return `[${this.nums.join(',')}]`;
	}
}
