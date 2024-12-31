const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		backgroundImage: {
  			'main-bg': 'url(/images/main-bg.png)'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-roboto)',
                    ...defaultTheme.fontFamily.sans
                ],
  			mono: [
  				'var(--font-roboto-mono)',
                    ...defaultTheme.fontFamily.mono
                ],
  			glitch: [
  				'Rubik Glitch'
  			],
  			racing: [
  				'Racing Sans One'
  			],
  			FiraSans: [
  				'FiraSans'
  			]
  		},
  		background: {
  			card: 'linear-gradient(0deg, #4D1E1A 0%, #0C0C0C 100%);'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		transitionTimingFunction: {
  			spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  		},
  		boxShadow: {
  			btn: '0px 0px 64px 0px rgba(255, 24, 1, 0.90)'
  		},
  		screens: {
  			'max-se': {
  				max: '375px'
  			},
  			'max-mobile': {
  				max: '767px'
  			},
  			'max-tablet': {
  				max: '1279px'
  			},
  			'max-laptop': {
  				max: '1919px'
  			},
  			tablet: '768px',
  			tabletBig: '870px',
  			laptop: '1280px',
  			desktop: '1920px',
  			'max-se-tall': {
  				raw: '(max-height: 800px)'
  			},
  			smallTall: {
  				raw: '(min-height: 720px)'
  			},
  			tall: {
  				raw: '(min-height: 1080px)'
  			}
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			backdropFadeIn: {
  				'0%': {
  					'background-color': 'rgba(0, 0, 0, 0)'
  				},
  				'100%': {
  					'background-color': 'rgba(0, 0, 0, 0.40)'
  				}
  			},
  			modalSlideUp: {
  				'0%': {
  					transform: 'translateY(100%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			modalSlideDown: {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					transform: 'translateY(100%)'
  				}
  			}
  		},
  		animation: {
  			fromBottom: 'fromBottom 0.5s ease-in-out',
  			backdropFadeIn: 'backdropFadeIn 0.5s ease-in-out forwards',
  			modalSlideUp: 'modalSlideUp 0.5s ease-in-out forwards',
  			modalSlideDown: 'modalSlideDown 0.5s ease-in-out forwards'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
