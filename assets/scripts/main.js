import '/assets/styles/main.pcss';

import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import MemberCard from './alpine/MemberCard.js';

import imageSlider from '../scripts/components/sliders/images.js';
import imageBeforeAfter from '../scripts/components/imageBeforeAfter.js';

import jQueryInit from './jquery';

window.Alpine = Alpine;

Alpine.plugin(focus);
Alpine.data('MemberCard', MemberCard);
Alpine.start();

document.documentElement.style.setProperty(
  '--scrollbar-width',
  window.innerWidth - document.documentElement.clientWidth + 'px'
);
jQueryInit();

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  imageSlider();
  imageBeforeAfter();
});
