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
/*
這段程式碼是一個使用遞迴方式來實現多維陣列展平的函式。以下是對程式碼的逐行解釋：
const flat = (arr, n) => {: 定義了一個名為 flat 的箭頭函式，接受兩個參數 arr 和 n。
let flatArr = [];: 創建一個空陣列 flatArr 來存放展平後的元素。
for (let i = 0; i < arr.length; i++) {: 使用迴圈遍歷輸入的陣列 arr。
if (n > 0 && Array.isArray(arr[i])) {: 檢查當前深度 n 是否達到指定的深度且元素是否是陣列。如果條件滿足，進入以下區塊。
flatArr.push(...flat(arr[i], n - 1));: 遞迴調用 flat 函式，將當前元素（子陣列）進一步展平，深度 n 減少 1。展平後的元素使用 ... 擴展運算符加入到 flatArr 中。
} else {: 如果不滿足上述條件，代表當前元素是數字或深度已經達到指定深度，進入以下區塊。
flatArr.push(arr[i]);: 直接將當前元素加入到 flatArr 中。
}: 結束條件判斷的區塊。
}: 結束迴圈。
return flatArr;: 返回展平後的陣列 flatArr。
這個函式透過遞迴的方式，將深度不超過指定值 n 的子陣列展平，最終返回展平後的一維陣列。
*/
