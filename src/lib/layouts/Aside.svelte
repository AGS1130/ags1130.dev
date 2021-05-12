<script lang="ts">
  import { page } from '$app/stores';
  import navLinks from '$lib/data/navigation';
  import { navMenu, colorTheme } from '$lib/data/store';
  import Tags from '$lib/components/Tags.svelte';
  import SocialLinks from '$lib/components/SocialLinks.svelte';

  let currentPath = '';

  page.subscribe(({ path }) => (currentPath = path));

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');

  const toggleTheme = () => {
    $colorTheme = $colorTheme === 'dark' ? 'light' : 'dark';
    document.querySelector('html').classList.toggle('dark');
  };
</script>

<aside class="{$navMenu}">
  <div class="sticky-scrollable">
    <div class="bio">
      <a href="/" on:click="{toggleNav}">
        <img src="/img/logo-{$colorTheme === 'dark' ? 'white' : 'black'}.svg" alt="AGS1130 Logo" />
      </a>
    </div>
    <h1>AGS1130</h1>
    <button on:click="{toggleTheme}"> Toggle Theme </button>
    <SocialLinks />
    <nav>
      {#each navLinks as { name, url }}
        <a href="{url}" class="link" class:active="{currentPath === url}" on:click="{toggleNav}">{name}</a>
      {/each}
    </nav>
    <input type="search" placeholder="Search" />
    <h4>Popular Tags</h4>
    <Tags />
  </div>
</aside>

<style lang="postcss">
  aside {
    @apply p-8 border-r-2 transition-all duration-300 ease-linear;

    .sticky-scrollable {
      @apply sticky top-0 bottom-0 overflow-y-scroll;

      .bio {
        @apply m-auto rounded-full text-center;

        width: 240px;
        height: 240px;
        transform: translate3d(0, 0, 0);
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
        transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

        &:active,
        &:focus,
        &:hover {
          @apply outline-none;

          transform: translate3d(0, -1px, 0);
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        }

        > a {
          @apply outline-none;

          > img {
            @apply m-auto;

            width: 240px;
            height: 240px;
          }
        }
      }

      h1 {
        @apply text-center my-6;
      }

      nav {
        @apply w-full flex justify-between my-6;

        .link {
          &::after {
            content: '';

            @apply block bg-primary-500 h-0.5 w-0 transition-all duration-300 ease-in-out;
          }

          &:hover::after {
            @apply w-full;
          }

          &.active::after {
            @apply w-full;
          }
        }
      }

      input {
        @apply w-full my-6 h-10;
      }

      h4 {
        @apply my-6;
      }
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
