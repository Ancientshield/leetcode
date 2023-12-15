class EventEmitter {
	constructor() {
		this.events = new Map();
	}

	subscribe(event, cbfn) {
		if (!this.events.has(event)) {
			this.events.set(event, []);
		}
		const cbfns = this.events.get(event);
		cbfns.push(cbfn);

		const unsubscribe = () => {
			const index = cbfns.indexOf(cbfn);
			if (index >= 0) {
				cbfns.splice(index, 1);
			}
		};
		return { unsubscribe };
	}

	emit(event, args) {
		if (!this.events.has(event)) {
			return [];
		}

		const cbfns = this.events.get(event);
		const eventEmits = [];

		for (const event of cbfns) {
			eventEmits.push(event(...args));
		}
		return eventEmits;
	}
}
