// import Swiper bundle with all modules installed
import Swiper from 'swiper/swiper-bundle';
// import Swiper styles
import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
  // If we need pagination
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
