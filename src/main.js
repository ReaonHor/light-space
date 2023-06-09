import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myTab from '@/components/myTab'
import '@/util/axios.config'

let app = createApp(App)
app.component('myTab', myTab)
app.directive('jump', {
	mounted (el) {

		el.addEventListener('mousedown', () => {
			el.classList.remove('c')
			el.classList.add('down')

		}, { passive: true })
		el.addEventListener('touchstart', () => {
			el.classList.remove('c')
			el.classList.add('down')

		}, { passive: true })
		el.addEventListener('mouseup', () => {
			el.classList.remove('down')
			el.classList.add('c')

		}, { passive: true })
		el.addEventListener('touchend', () => {
			el.classList.remove('down')
			el.classList.add('c')

		}, { passive: true })
		el.addEventListener('mouseleave', () => {
			el.classList.remove('down')
			el.classList.add('c')

		}, { passive: true })
		el.addEventListener('touchmove', () => {
			el.classList.remove('down')
			el.classList.add('c')

		}, { passive: true })
	}
})

app.use(store).use(router).mount('#app')




