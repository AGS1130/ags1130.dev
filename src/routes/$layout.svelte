<script lang="ts">
  import '../app.postcss';

  // Would be nice if this were extensible `$layouts` 😞
  // https://kit.svelte.dev/docs#configuration-files
  import Header from '$lib/layouts/Header/Header.svelte';
  import Aside from  '$lib/layouts/Aside/Aside.svelte';
  import Footer from '$lib/layouts/Footer/Footer.svelte';
</script>

<Header />
<main>
  <Aside />
  <slot />
</main>
<Footer />
