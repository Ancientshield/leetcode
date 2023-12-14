class TimeLimitedCache {
	constructor() {
		this.cache = new Map();
	}
	set(key, value, duration) {
		let found = this.cache.has(key);

		if (found) {
			clearTimeout(this.cache.get(key).ref);
		}
		// Map.prototype.set()、Map.prototype.get()，皆為 Map 原生方法
		this.cache.set(key, {
			value,
			ref: setTimeout(() => this.cache.delete(key), duration),
		});
		return found;
	}
	get(key) {
		return this.cache.has(key) ? this.cache.get(key).value : -1;
	}
	count() {
		// Map.prototype.size() 為 Map 原生方法
		return this.cache.size;
	}
}
