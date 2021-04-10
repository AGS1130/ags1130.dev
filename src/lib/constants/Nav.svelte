<script lang="ts">
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Archive', url: '/archive' }
  ];
</script>

<nav>
  {#each links as { name, url }}
    <a href="{url}">{name}</a>
  {/each}
</nav>

<style lang="postcss">
  nav {
    @apply w-full flex justify-between my-8;
  }
</style>
