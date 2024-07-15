import type { Config } from 'tailwindcss';

export default {
	content: ['./src/routes/**/*.svelte', './src/components/*.svelte'],
	theme: {
		extend: {}
	},
	plugins: []
} satisfies Config;
