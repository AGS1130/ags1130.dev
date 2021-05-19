import sveltePreprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import { readFile } from 'fs/promises';

const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)));
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
    adapter: {
      adapt: adapterStatic
    },

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    }
  }
};
