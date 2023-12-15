// 定義一個名為 ArrayWrapper 的類別
class ArrayWrapper {
	// 建構子接受一個整數陣列作為參數
	constructor(nums) {
		this.nums = nums;
	}
	// 定義 valueOf 方法，當兩個實例相加時被呼叫，回傳兩個陣列所有元素的總和
	valueOf() {
		// 使用 flat 方法將二維陣列變成一維
		const flattenArray = this.nums.flat(1);
		// 使用 reduce 方法計算陣列元素的總和
		return flattenArray.reduce((accumulator, num) => accumulator + num, 0);
	}
	// 定義 toString 方法，當呼叫 String 函式時被呼叫，回傳陣列的字串表示，用逗號分隔，並以方括號包裹
	toString() {
		return `[${this.nums.join(',')}]`;
	}
}

/*
這個類別有兩個主要功能：
一是當兩個實例使用 + 運算子相加時，
會回傳兩個陣列所有元素的總和；
二是當呼叫 String() 函式時，
會回傳陣列的字串表示，用逗號分隔，
並以方括號包裹。
*/

/*
flat(1) 的參數表示要將多少層的巢狀陣列拉平。
1 代表將一層巢狀陣列拉平，也就是將原本的二維陣列轉為一維陣列。
例如，如果 this.nums 是 [[1, 2], [3, 4]]，
則經過 flat(1) 之後，
flattenArray 就會變成 [1, 2, 3, 4]。
*/

/*
Array.prototype.reduce( callback[accumulator, currentValue, currentIndex, array], initialValue)

callback
用於處理陣列中每個元素的函式，可傳入四個參數：

accumulator
用來累積回呼函式回傳值的累加器（accumulator）或 initialValue（若有提供的話，詳如下敘）。累加器是上一次呼叫後，所回傳的累加數值。

currentValue
原陣列目前所迭代處理中的元素。

currentIndex 選擇性
原陣列目前所迭代處理中的元素之索引。若有傳入 initialValue，則由索引 0 之元素開始，若無則自索引 1 之元素開始。

array 選擇性
呼叫 reduce() 方法的陣列。

initialValue 選擇性
: 於第一次呼叫 callback 時要傳入的累加器初始值。若沒有提供初始值，則原陣列的第一個元素將會被當作初始的累加器。假如於一個空陣列呼叫 reduce() 方法且沒有提供累加器初始值，將會發生錯誤。
*/
