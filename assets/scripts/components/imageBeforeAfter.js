export default function imageBeforeAfter() {
  const elImageBeforeAfter = document.querySelectorAll('.imageBeforeAfter');
  
  if (!elImageBeforeAfter) return;

  elImageBeforeAfter.forEach((item) => {

    item.addEventListener('input', (e) => {
      const sliderPos = e.target.value;
      const foregroundImg = item.querySelector('.foreground-img');
      const sliderButton = item.querySelector('.slider-button');

      foregroundImg.style.width = `${sliderPos}%`;
      sliderButton.style.left = `calc(${sliderPos}% - 32px)`;
    });

    item.addEventListener('change', (e) => {
      const sliderPos = e.target.value;
      const foregroundImg = item.querySelector('.foreground-img');
      const sliderButton = item.querySelector('.slider-button');

      foregroundImg.style.width = `${sliderPos}%`;
      sliderButton.style.left = `calc(${sliderPos}% - 32px)`;
    });
  });
}
