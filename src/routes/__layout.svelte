<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';

  // Would be nice if this were extensible `$layouts` 😞
  // https://kit.svelte.dev/docs#configuration-files
  import Header from '$lib/layouts/Header.svelte';
  import Aside from '$lib/layouts/Aside.svelte';
  import Footer from '$lib/layouts/Footer.svelte';

  import { colorTheme } from '$lib/data/store';

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
  <meta name="msapplication-TileColor" content="{$colorTheme === 'light' ? '#ffffff' : '#000000'}" />
  <meta name="theme-color" content="{$colorTheme === 'light' ? '#ffffff' : '#000000'}" />

  <!-- Fonts -->
  <style>
    /*
    *
    * Asap
    */

    /* latin-ext */
    @font-face {
      font-family: 'Asap';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/asap/v15/KFO9CniXp96a4Tc2EZzSuDAoKsE61phHW3ieBVEfczXgWw.woff) format('woff');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }

    /* latin */
    @font-face {
      font-family: 'Asap';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/asap/v15/KFO9CniXp96a4Tc2EZzSuDAoKsE61phJW3ieBVEfczU.woff) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /*
    *
    * Poppins
    */

    /* latin-ext */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
        U+A720-A7FF;
    }

    /* latin */
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
        U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  </style>
</svelte:head>

<Header />
<main>
  <Aside />
  <section>
    <slot />
  </section>
</main>
<Footer />

<style lang="postcss">
  :global(h1) {
    @apply text-7xl;
  }

  main {
    @apply grid;

    grid-template-columns: 1fr 3fr;

    section {
      @apply text-center p-20 my-0 mx-auto max-w-4xl;
    }
  }

  @media (max-width: 800px) {
    :global(h1) {
      @apply text-4xl;
    }

    main {
      @apply flex flex-row justify-around;

      section {
        @apply p-12;
      }
    }
  }
</style>
