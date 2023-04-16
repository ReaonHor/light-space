import axios from 'axios'

export function getTime () {
	return axios.get('http://1.117.218.200:3000/home/time')
		.then(res => {
			let nowTime = res.data
			let date = new Date(nowTime)
			let mon = date.getMonth() + 1
			let day = date.getDate()
			let week
			switch (date.getDay() - 0) {
				case 0: week = '天'
					break;
				case 1: week = '一'
					break;
				case 2: week = '二'
					break;
				case 3: week = '三'
					break;
				case 4: week = '四'
					break;
				case 5: week = '五'
					break;
				case 6: week = '六'
					break;
			}
			let years = date.getFullYear()
			let hours = date.getHours()
			let wu = hours >= 12 ? 1 : 0
			let minutes = date.getMinutes()
			let seconds = date.getSeconds()
			return {
				years,
				mon,
				day,
				week,
				wu,
				minutes,
				seconds,
				hours
			}


		})
}