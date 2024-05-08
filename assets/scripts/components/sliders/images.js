
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Scrollbar } from 'swiper/modules';

import { getA11y } from '../../utils/swiper';

export default function imageSlider() {
	const pageLang = document.querySelector('html').getAttribute('lang') || 'en';
	const sliders = document.querySelectorAll('.swiper--images');

	let sliderInstances = [];

	if (!sliders) return;

	// init
	// --------------------------------------------
	sliders.forEach((slider) => {
		const sliderSwiper = new Swiper(slider, {
			a11y: getA11y(pageLang),
			loop: false,
			spaceBetween: 24,
			slidesPerView: 'auto',
			centeredSlides: false,
			watchSlidesProgress: true,
			navigation: {
				nextEl: '.swiper-button-next-custom',
				prevEl: '.swiper-button-prev-custom'
			},
			scrollbar: {
				el: '.swiper-scrollbar',
				hide: false
			},
			modules: [Navigation, A11y, Scrollbar]
		});
		sliderInstances.push(sliderSwiper);
	});
}
