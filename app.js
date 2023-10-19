/**
 * @returns {HTMLDivElement}
 * @param selector {string}
 */
const $ = (selector) => document.querySelector(selector);

/**
 * @returns {HTMLDivElement[]}
 * @param selector {string}
 */
const $$ = (selector) => document.querySelectorAll(selector);

const baseConfig = {
  slidesPerView: 'auto',
	speed: 2500,
	loop: true,
  spaceBetween: 12,
	autoplay: {
		delay: 0,
		stopOnLastSlide: false,
		disableOnInteraction: true,
	},

};

const b1 = new Swiper('.vt1', baseConfig);
const b2 = new Swiper('.vt2', baseConfig);
const b3 = new Swiper('.vt3', baseConfig);
const b4 = new Swiper('.vt4', baseConfig);





const dkSlider = new Swiper(".dsList", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".dsList-pagination",
    clickable: true,
  },
});


const adsSlider = new Swiper('.adsSlider', {
	slidesPerView: 1,
	speed: 1,
	loop: true,
	spaceBetween: 0,
  direction: "vertical",
	autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

$('.slide-container').style.height = innerHeight - 182 - 50 + 'px';

function toggleBottomSheet() {
  $('.bottom-sheet').classList.toggle('show')
}

function togglePage() {
  $('.other-page').classList.toggle('show')
}