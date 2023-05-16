/** @type {import('tailwindcss').Config} */

const sharedConfig = require('config-tailwind/tailwind.config');

module.exports = {
  ...sharedConfig,
  content: ['./**/*.{js,ts,jsx,tsx,mdx}'],
};
