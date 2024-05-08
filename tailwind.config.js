module.exports = {
  content: [
    './assets/**/*.{js,jsx,ts,vue}',
    './modules/**/*.{php,twig}',
    './templates/**/*.{twig,html}',
    './templates/*.{twig,html}'
  ],
  theme: {
    screens: {
      xxs: '360px',
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
      '3xl': '1920px'
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      turquoise: {
        100: '#DFF1F1',
        500: '#4CCED0'
      },
      brown: {
        400: '#988F84',
        500: '#71695F',
        600: '#3C3833',
        800: '#1F1F1F'
      },
      red: {
        error: '#CC002B'
      }
    },
    fontSize: {
      xs: '14px',
      // sm: '16px',
      base: '16px',
      md: '18px',
      lg: '24px',
      // xl: '2.125rem',
      // '2xl': '2.75rem',
      // '3xl': '4.375rem',
      // '4xl': '5.625rem'
    },
    fontFamily: {
      primary: ['Manrope', 'sans-serif']
    },
    borderRadius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12 px',
      full: '9999px'
    },
    lineHeight: {
      none: '1',
      tight: '1.16',
      snug: '1.2',
      normal: '1.5',
      relaxed: '1.77',
      loose: '2'
    },
    extend: {
      spacing: {
        'spacing-xxs': '8px',
        'spacing-xs': '16px',
        'spacing-s': '24px',
        'spacing-md': '40px',
        'spacing-lg': '64px',
        'spacing-xl': '80px',
        'spacing-2xl': '104px',
        'spacing-3xl': '128px',
        grid: '1.5rem'
      },
      transitionTimingFunction: {
        inSine: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
      },
      boxShadow: {
        slide: '0px 10px 10px rgba(39, 39, 39, 0.2);',
        box: '0px 10px 10px rgba(39, 39, 39, 0.2);'
      },
      zIndex: {
        toolbar: 45,
        header: 50,
        menuMobile: 60,
        modal: 70,
      },
      letterSpacing: {
        text: '.04em',
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(180deg, rgba(31, 31, 31, 0.00) 0%, rgba(31, 31, 31, 0.78) 100%)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-headings': 'currentColor',
            '--tw-prose-bold': 'currentColor',
            '--tw-prose-counters': 'currentColor',
            '--tw-prose-bullets': 'currentColor',
            '--tw-prose-links': theme('colors.accent'),
            color: 'currentColor',
            lineHeight: '1.77 ',
            maxWidth: 'none',
            h1: {
              marginTop: '1em',
              marginBottom: '1em'
            },
            h2: {
              marginTop: '1em',
              marginBottom: '1em'
            },
            h3: {
              marginTop: '1em',
              marginBottom: '1em'
            },
            h4: {
              marginTop: '1em',
              marginBottom: '1em'
            },
            strong: {
              fontWeight: 'bold'
            }
          }
        }
      })
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/typography')({
      className: 'wysiwyg'
    })
  ]
};
