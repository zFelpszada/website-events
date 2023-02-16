/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				primary: '#6246EA',
				secondary: '#F8F8FF',
				tertiary: '#111111',
				quaternary: '#686868'
			}
		},
		fontFamily: {
			Roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
		}
	},

	plugins: []
};
