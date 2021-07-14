<script lang="ts">
  import { navMenu } from '$lib/data/store';
  import SocialLinks from '$lib/components/SocialLinks.svelte';

  const thisYear = new Date().getFullYear();

</script>

<style>
  footer {
    @apply text-center py-8 px-0 border-t-2;
  }

  @screen <md {
    footer.open {
      @apply hidden;
    }
  }

</style>

<footer class={$navMenu}>
  &copy;
  {thisYear}
  Built by Gregory Salinas.
  <br />
  All rights reserved.
  <br />
  <a href="https://github.com/AGS1130/ags1130.dev">GitHub Repository</a>
  <br />
  <SocialLinks />
</footer>
