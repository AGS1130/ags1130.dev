<script lang="ts">
  import Bio from '$lib/constants/Bio.svelte';
  import Nav from '$lib/constants/Nav.svelte';
  import ToggleColorTheme from '$lib/components/ToggleColorTheme.svelte';
  import SocialLinks from '$lib/constants/SocialLinks.svelte';
  import Search from '$lib/components/Search/Search.svelte';
  import Tags from '$lib/components/Tags/Tags.svelte';

  import { navMenu } from '$lib/controller/store';
</script>

<aside class="{$navMenu}">
  <Bio />
  <h1>AGS1130</h1>
  <ToggleColorTheme />
  <SocialLinks />
  <Nav />
  <Search />
  <h4>Popular Tags</h4>
  <Tags />
</aside>

<style lang="postcss">
  aside {
    @apply p-8 border-r-2 transition-all duration-300 ease-linear;

    h1 {
      @apply text-center my-6;
    }

    h4 {
      @apply my-6;
    }
  }

  @media (max-width: 800px) {
    aside {
      @apply absolute border-r-0 w-full z-50;

      /* Work with Svelte transitions */
      transform: translateX(-100%);

      &.open {
        transform: translateX(0);
      }
    }
  }
</style>
