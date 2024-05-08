export function getA11y(lang = 'en') {
  const a11y = {
    en: {
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      nextSlideMessage: 'Next slide',
      prevSlideMessage: 'Previous slide'
    },
    fr: {
      firstSlideMessage: 'Ceci est la première diapositive',
      lastSlideMessage: 'Ceci est la dernière diapositive',
      nextSlideMessage: 'Diapositive suivante',
      prevSlideMessage: 'Diapositive précédente'
    }
  };
  return a11y[lang];
}
