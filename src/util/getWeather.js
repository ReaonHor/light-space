import axios from 'axios'
export function getWeather() {
	return axios.get('http://1.117.218.200:3000/home/weather').then(res=>{
		return res.data
	})
}