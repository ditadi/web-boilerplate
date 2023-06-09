/** @type {import('tailwindcss').Config} */
const sharedConfig = require('config-tailwind/tailwind.config');
module.exports = {
  ...sharedConfig,
  content: ['./src/**/*.stories.{js,ts,jsx,tsx,mdx}', '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}'],
};
