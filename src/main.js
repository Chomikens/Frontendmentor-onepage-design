import Swiper from 'swiper'
import { Navigation, Keyboard } from 'swiper/modules'

const indexSwiper = new Swiper('.swiper', {
	modules: [Navigation, Keyboard],
	direction: 'horizontal',
	initialSlide: 0,
	slidesPerView: 1,
	centeredSlidesBounds: true,
	rewind: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	navigation: {
		nextEl: '.button--right',
		prevEl: '.button--left',
	},
	breakpoints: {
		540: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
	},
})

export default indexSwiper
