export function tabContainer (index, prj, data) {
	prj = data.map(item => {
		item['block'] = true
		item['lo'] = item['id']
		return item
	})
	if (index == 0) {
		prj = data.map(item => {
			item['block'] = true
			item['lo'] = item['id']
			return item
		}
		)
	}
	for (let i = 1; i <= 12; i++) {
		if (index == i) {
			let cut = 0
			prj = data.map(item => {
				if (item[`lo${i}`]) {
					item['lo'] = cut++
					return item
				} else {
					item['block'] = false
					return item
				}
			})
		}
	}
	return prj
}