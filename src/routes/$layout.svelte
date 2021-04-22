<script lang="ts">
  import '../app.postcss';

  // Would be nice if this were extensible `$layouts` 😞
  // https://kit.svelte.dev/docs#configuration-files
  import Header from '$lib/layouts/Header/Header.svelte';
  import Aside from '$lib/layouts/Aside.svelte';
  import Footer from '$lib/layouts/Footer.svelte';
</script>

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
