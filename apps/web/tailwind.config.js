/** @type {import('tailwindcss').Config} */
const sharedConfig = require('config-tailwind/tailwind.config');
module.exports = {
	...sharedConfig,
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
	],
};
