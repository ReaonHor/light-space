export function throttle (event, time, flag) {
	let timer = null
	return function (...args) {
		if (flag) {
			event.apply(this, args);
			flag = false
		}
		if (!timer) {
			timer = setTimeout(() => {
				timer = null;
				event.apply(this, args);
			}, time);
		}
	}
}