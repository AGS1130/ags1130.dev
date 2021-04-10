<script lang="ts">
  import Bio from '$lib/constants/Bio.svelte';
  import Nav from '$lib/constants/Nav.svelte';
  import SocialLinks from '$lib/constants/SocialLinks.svelte';
  import Tags from '$lib/components/Tags/Tags.svelte';
</script>

<aside>
  <Bio />
  <h1>AGS1130</h1>
  <SocialLinks />
  <Nav />
  <h4>Popular Tags</h4>
  <Tags />
</aside>

<style lang="postcss">
  aside {
    @apply p-8 border-r-2;

    transition: transform 0.3s ease-in-out;

    h1 {
      @apply text-center my-8;
    }
  }
</style>
