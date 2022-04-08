import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

var phoneMask = IMask(
    document.getElementById('tel'), {
      mask: '+{7}(000)000-00-00'
    });