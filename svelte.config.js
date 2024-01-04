import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}
};