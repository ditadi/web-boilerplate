/** @type {import('tailwindcss').Config} */

const sharedConfig = require('config-tailwind');

module.exports = {
	...sharedConfig,
	content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
};
