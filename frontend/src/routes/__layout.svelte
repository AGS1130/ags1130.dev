<script lang="ts" context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page, fetch, session, context }) {
    try {
      const res = await fetch('api/tags');
      const { tags } = await res.json();
      return { props: { tags } };
    } catch (err) {
      console.log(err);
    }
  }

</script>

<script lang="ts">
  import { onMount } from 'svelte';

  // Would be nice if this were extensible `$layouts` 😞
  // https://kit.svelte.dev/docs#configuration-files
  import Header from '$lib/layouts/Header.svelte';
  import Aside from '$lib/layouts/Aside.svelte';
  import Footer from '$lib/layouts/Footer.svelte';

  import { navMenu, colorTheme } from '$lib/data/store';

  export let tags;

  onMount(() => {
    $colorTheme === 'dark' && document.querySelector('html').classList.add('dark');
  });

</script>

<svelte:head>
  <!-- Favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/{$colorTheme}-mode/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/{$colorTheme}-mode/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/{$colorTheme}-mode/favicon-16x16.png" />
  <link rel="manifest" href="/{$colorTheme}-mode/site.webmanifest" />
  <link rel="mask-icon" href="/{$colorTheme}-mode/safari-pinned-tab.svg" color="#000000" />
  <meta name="msapplication-TileColor" content={$colorTheme === 'light' ? '#ffffff' : '#000000'} />
  <meta name="theme-color" content={$colorTheme === 'light' ? '#ffffff' : '#000000'} />
</svelte:head>

<Header />
<main>
  <Aside {tags} />
  <section class={$navMenu}>
    <slot />
  </section>
</main>
<Footer />

<style global windi:preflights:global>
  html {
    @apply bg-white text-black font-body transition-all duration-300 ease-linear;
  }

  a,
  small {
    @apply font-body;
  }

  h1,
  img {
    @apply p-0 mb-6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply font-heading text-current font-bold;

    text-rendering: optimizeLegibility;
  }

  h1 {
    @apply text-4xl mb-3;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }

  h4 {
    @apply text-base;
  }

  h5 {
    @apply text-sm;
  }

  h6,
  small {
    @apply text-xs;
  }

  img {
    @apply max-w-full border-none;
  }

  figure {
    @apply mx-4 my-10;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    @apply font-body;
  }

  b,
  strong {
    @apply font-bold;
  }

  fieldset {
    @apply p-0 mb-6 border border-solid border-gray-500;
  }

  legend {
    @apply table max-w-full whitespace-normal;
  }

  textarea {
    @apply overflow-auto;
  }

  ::-webkit-input-placeholder {
    @apply text-current opacity-50;
  }

  ::-webkit-file-upload-button {
    font: inherit;
  }

  figure,
  p {
    @apply mb-6 font-body;
  }

  ol,
  ul {
    @apply ml-6;
  }

  blockquote,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  pre,
  table,
  ul {
    @apply mb-6;
  }

  pre {
    @apply p-6 text-sm overflow-auto rounded-sm bg-black bg-opacity-5;
  }

  blockquote {
    @apply mx-6;
  }

  li {
    @apply mb-3;

    > p {
      @apply mb-3;
    }
  }

  ol li,
  ul li {
    @apply font-body;
  }

  aside {
    @apply bg-white;
  }

  html.dark {
    @apply bg-dark-900 text-white;
  }

  html.dark aside {
    @apply bg-dark-900;
  }

  main {
    @apply grid grid-cols-[1fr,3fr];
  }

  main section {
    @apply text-center p-20;
  }

  @screen <md {
    main {
      @apply flex;
    }

    main section {
      @apply p-8 transition-opacity delay-100 ease-linear;
    }

    main section.open {
      @apply hidden;
    }
  }

</style>
