import Swiper from 'swiper';

export const slider = () => {
	const mobiileWidth = window.matchMedia('(max-width: 768px)');
	let sliderInstance = null;
	const initSlider = () => {
		const slider = document.querySelector('[data-slider');
		if (slider) {
			sliderInstance = new Swiper(slider, {
				slidesPerView: 'auto',
				spaceBetween: 10,
			});
		}
	};

	if (mobiileWidth.matches) {
		initSlider();
	}

	window.addEventListener('resize', () => {
		if (mobiileWidth.matches && !sliderInstance) {
			initSlider();
		}

		if (!mobiileWidth.matches && sliderInstance) {
			sliderInstance.destroy();
			sliderInstance = null;
		}
	});
};
