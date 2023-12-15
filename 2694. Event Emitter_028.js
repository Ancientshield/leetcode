class EventEmitter {
	// 使用 class 建構式，初始化事件 new Map() 以及對應的回呼函式陣列
	constructor() {
		this.events = new Map();
	}

	// 訂閱事件，接收事件名稱與回呼函式，並返回一個包含取消訂閱方法的物件
	subscribe(event, cbfn) {
		// 如果事件尚未存在，則使用 Map.prototype.set() 建立一個對應的空陣列
		if (!this.events.has(event)) {
			this.events.set(event, []);
		}
		// 取得事件對應的回呼函式陣列
		const cbfns = this.events.get(event);
		// 加入新的回呼函式
		cbfns.push(cbfn);

		// 定義取消訂閱的方法，將回呼函式從陣列中移除
		const unsubscribe = () => {
			const index = cbfns.indexOf(cbfn);
			if (index >= 0) {
				cbfns.splice(index, 1);
			}
		};
		// 回傳包含取消訂閱方法的『物件』
		return { unsubscribe };
	}

	// 發送事件，接收事件名稱與參數陣列，返回所有回呼函式的執行結果陣列
	emit(event, args) {
		// 如果事件尚未存在，返回空陣列
		if (!this.events.has(event)) {
			return [];
		}

		// 取得事件對應的回呼函式陣列
		const cbfns = this.events.get(event);
		// 用於儲存回呼函式執行結果的陣列
		const eventEmits = [];

		// 依序執行回呼函式，並將結果加入陣列
		for (const event of cbfns) {
			eventEmits.push(event(...args));
		}
		// 返回所有回呼函式的執行結果陣列
		return eventEmits;
	}
}
