class Calculator {
	// 建構子，接受一個數字作為結果的初始值
	constructor(value) {
		this.result = value;
	}

	// 加法操作，將結果加上給定的數字，並返回更新後的計算機物件
	add(value) {
		this.result += value;
		return this; // 使用 method chaining，返回更新後的計算機物件
	}

	// 減法操作，將結果減去給定的數字，並返回更新後的計算機物件
	subtract(value) {
		this.result -= value;
		return this; // 使用 method chaining，返回更新後的計算機物件
	}

	// 乘法操作，將結果乘以給定的數字，並返回更新後的計算機物件
	multiply(value) {
		this.result *= value;
		return this; // 使用 method chaining，返回更新後的計算機物件
	}

	// 除法操作，將結果除以給定的數字，並返回更新後的計算機物件
	// 如果給定的數字是 0，則拋出錯誤 "Division by zero is not allowed"
	divide(value) {
		if (value == 0) throw new Error('Division by zero is not allowed');
		this.result /= value;
		return this; // 使用 method chaining，返回更新後的計算機物件
	}

	// 冪次操作，將結果的冪次方更新為給定的數字，並返回更新後的計算機物件
	power(value) {
		this.result **= value;
		return this; // 使用 method chaining，返回更新後的計算機物件
	}

	// 取得目前的計算結果
	getResult() {
		return this.result;
	}
}
