const join = (arr1, arr2) => {
	// 創建一個空物件用於存放合併後的結果，鍵是 id，值是對應的物件
	const joinedArray = {};

	// 遍歷 arr1，將每個物件按照 id 加入到 joinedArray 中
	arr1.forEach((item) => {
		// obj[key] = value; （把值塞進去的方法）
		joinedArray[item.id] = item;
	});

	// 再次遍歷 arr2
	arr2.forEach((item) => {
		// 在 arr2 的迴圈內比對 joinedArray，如果 arr1 中已經有相同 id 的物件
		if (joinedArray[item.id]) {
			// 遍歷 arr2 中的物件的所有屬性
			Object.keys(item).forEach((key) => {
				// 使用 arr2 中的新的值更新 joinedArray 中對應 id 的物件的屬性
				joinedArray[item.id][key] = item[key];
			});
		} else {
			// 如果 joinedArray 中還沒有這個 id，直接將整個物件加入
			joinedArray[item.id] = item;
		}
	});

	// 將 joinedArray 中的所有值取出，形成一個陣列，並返回
	return Object.values(joinedArray);
};

/*
這個函式的主要邏輯是使用一個物件 joinedArray 來暫存合併的結果，該物件的鍵是 id，值是對應的物件。程式碼的流程可以分為以下幾個步驟：
初始化 joinedArray： 創建一個空物件，用於保存合併的結果。
遍歷 arr1： 使用 forEach 方法遍歷 arr1 中的每個物件，將物件的 id 作為鍵，整個物件作為值，加入到 joinedArray 中。
遍歷 arr2： 再次使用 forEach 方法遍歷 arr2 中的每個物件。
a. 如果 joinedArray 中已經有相同 id 的物件，則遍歷 arr2 中的物件的所有屬性，使用 arr2 中的值更新 joinedArray 中對應 id 的物件的屬性。
b. 如果 joinedArray 中還沒有這個 id，直接將整個物件加入 joinedArray。
返回結果陣列： 使用 Object.values(joinedArray) 取出 joinedArray 中的所有值，形成一個陣列，並返回作為最終結果。
這樣，程式碼就實現了合併兩個陣列並根據 id 進行排序的功能，同時處理了相同 id 的物件屬性的合併。
*/
