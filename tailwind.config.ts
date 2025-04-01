const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {

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
				FiraSans: [
					'FiraSans'
				]
			},
			background: {

			},
			colors: {

			},
			transitionTimingFunction: {

			},
			boxShadow: {

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
		}
	},
	plugins: [require("tailwindcss-animate")],
};
