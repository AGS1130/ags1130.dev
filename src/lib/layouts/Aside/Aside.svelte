<script lang="ts">
  import Bio from './Bio.svelte';
  import Nav from './Nav.svelte';
</script>

<aside>
  <div>
    <Bio/>
    <!-- <SocialLinks/> -->
    <Nav/>
    <div>
      <!-- <Tags/> -->
      Aside
    </div>
  </div>
</aside>

<style lang="postcss">
  aside {
    transition: transform 0.3s ease-in-out;

    > div {
      @apply container;
    }
  }
</style>
