/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				dancing: ["Dancing Script", "cursive"],
				inter: ["Inter", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				tektur: ["Tektur", "sans-serif"],
				modelica: ['"Bw Modelica LGC"', "sans-serif"],
			},
		},
	},
	variants: {
		extend: {
			backdropBlur: ["responsive"], // Enable 'backdropBlur' for responsive variants
			textColor: ["disabled"],
			cursor: ["disabled"],
		},
	},
	plugins: [],
};
