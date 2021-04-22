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
  main {
    @apply grid;

    grid-template-columns: 1fr 3fr;

    section {
      @apply text-center p-20 my-0 mx-auto;
    }
  }

  @media (max-width: 800px) {
    main {
      @apply flex flex-row justify-around;

      section {
        @apply p-12;
      }
    }
  }
</style>
