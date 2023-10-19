import Swiper from 'swiper'
import { Navigation, Keyboard } from 'swiper/modules'

const indexSwiper = new Swiper('.swiper', {
	modules: [Navigation, Keyboard],
	direction: 'horizontal',
	slidesPerView: '2.',
	centeredSlides: true,
	loop: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	navigation: {
		nextEl: '.button--right',
		prevEl: '.button--left',
	},
	breakpoints: {
		768: {
			centeredSlides: false,
			loop: false,
			slidesPerView: 2.3,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 3,
		},
	},
})

export default indexSwiper
