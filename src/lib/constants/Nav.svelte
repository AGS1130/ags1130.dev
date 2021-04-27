<script lang="ts">
  import { page } from '$app/stores';
  import { navMenu } from '$lib/controller/store';

  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Tags', url: '/tags' },
    { name: 'Archive', url: '/archive' }
  ];
  let currentPath = '';

  page.subscribe(({ path }) => (currentPath = path));
  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');
</script>

<nav>
  {#each links as { name, url }}
    <a href="{url}" class:active="{currentPath === url}" on:click="{toggleNav}">{name}</a>
  {/each}
</nav>

<style lang="postcss">
  nav {
    @apply w-full flex justify-between my-6;

    a {
      &::after {
        content: "";

        @apply block bg-black h-0.5 w-0 transition-all ease-in-out;
      }

      &:hover::after {
        @apply w-full;
      }

      &.active {
        &::after {
          @apply w-full;
        }
      }
    }
  }
</style>
