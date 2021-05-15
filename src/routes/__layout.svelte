<script lang="ts">
  import '../app.postcss';
  import { onMount } from 'svelte';

  // Would be nice if this were extensible `$layouts` 😞
  // https://kit.svelte.dev/docs#configuration-files
  import Header from '$lib/layouts/Header.svelte';
  import Aside from '$lib/layouts/Aside.svelte';
  import Footer from '$lib/layouts/Footer.svelte';

  import { navMenu, colorTheme } from '$lib/data/store';

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
</svelte:head>

<Header />
<main>
  <Aside />
  <section class="{$navMenu}">
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
      @apply flex;

      section {
        @apply p-12 transition-opacity delay-100 ease-linear;

        &.open {
          @apply hidden;
        }
      }
    }
  }

</style>
