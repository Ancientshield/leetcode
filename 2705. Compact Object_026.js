const compactObject = (obj) => {
	if (typeof obj !== 'object' || obj === null) return obj;

	if (Array.isArray(obj)) {
		return obj.filter(Boolean).map(compactObject);
	}

	const compacted = {};

	for (const key in obj) {
		let value = compactObject(obj[key]);
		if (Boolean(value)) compacted[key] = value;
	}

	return compacted;
};

/*
理解題目
題目要求創建 Compact Object，即刪除包含假值（falsy values）的鍵。
我們需要遍歷物件的鍵值對，將不包含假值的鍵值對新增到新的物件中。
根據 JSON.parse 輸出物件是否可迭代進行資料處理。

JSON.parse 輸出物件根據是否可迭代分為：
不可迭代的類型：Number、Boolean、null。
可迭代的類型：Object、Array、String。

對不可迭代類型進行處理：Number、Boolean、null
如果傳入的參數是 Number、Boolean(obj !== 'object') 或為 null，直接返回該參數
ps. 額外判斷是否為 null 是因為 typeof null 會傳回 object
if (typeof obj !== 'object' || obj === null) return obj;

對可迭代類型進行處理：Array、Object、String
使用遞迴的方式處理陣列和物件的元素，
另應確保多層嵌套的情況下，每個子物件都被適當地處理，並且將偽值元素移除。

使用 Array.filter(Boolean) 過濾陣列中的假值元素 
接著使用 Array.map(compactObject) 對每個遞迴調用 compactObject 函數
Array.prototype.map 會為每個元素調用 callback function，並將每個 cbfn 返回值組成一個新的陣列。

Object 物件、String 字串處理
宣告物件 const compacted = {}; 儲存精簡過後的元素
for 迴圈遍歷對當前obj鍵值進行遞迴 compactObject 函數
如為布林值且為 Truthy Value，則將對應的鍵值對放入物件 compacted 中。
回傳 compacted。
*/
