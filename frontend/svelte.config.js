import sveltePreprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import adapt from '@sveltejs/adapter-static';

const mode = process.env.NODE_ENV;
const isProduction = mode === 'production';

/** @type {import('@sveltejs/kit').Config} */
export default {
  // options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
  compilerOptions: null,

  // an array of file extensions that should be treated as Svelte components
  extensions: ['.svelte'],
  // options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
  preprocess: [
    sveltePreprocess(),
    windi({
      mode,
      configPath: './windi.config.cjs',
      useDevTools: {
        enabled: isProduction
      }
    })
  ],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: { adapt },
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte'
  }

  // Removed vite.ssr.noExternal; recommended fix for loading libraries
  // https://github.com/vitejs/vite/issues/2579#issuecomment-826849545
};
