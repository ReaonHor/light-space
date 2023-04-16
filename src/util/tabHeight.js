export function p_tabHeight (data) {
	let windowWidth = document.documentElement.clientWidth
	let count = 0
	data.forEach(item => {
		if (item.block) {
			count++
		} else {
			return
		}
	})
	if (windowWidth > 1240) {
		return `height:${Math.ceil(count / 3) * 330}px`
	} else if (windowWidth <= 1240 && windowWidth > 700) {
		return `height:${Math.ceil(count / 3) * 272}px`
	} else {
		return `height:${count * 213}px`
	}
}
export function n_tabHeight (data) {
	let windowWidth = document.documentElement.clientWidth
	let count = 0
	data.forEach(item => {
		if (item.block) {
			count++
		} else {
			return
		}
	})
	if (windowWidth > 1240) {
		return `height:${Math.ceil(count / 3) * 155 + 32}px`
	} else if (windowWidth <= 1240 && windowWidth > 700) {
		return `height:${Math.ceil(count / 3) * 131 + 32}px`
	} else {
		return `height:${count * 121 + 32}px`
	}
}

