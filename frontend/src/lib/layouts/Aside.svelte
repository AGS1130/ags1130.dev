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

<aside class="{$navMenu} {$colorTheme}">
  <div class="sticky-scrollable">
    <div class="logo-wrapper">
      <a href="/" on:click="{toggleNav}" class="logo">
        <img src="/img/logo-{$colorTheme === 'dark' ? 'white' : 'black'}.svg" alt="AGS1130 Logo" />
      </a>
    </div>
    <h1>AGS1130</h1>
    <SocialLinks />
    <nav>
      {#each navLinks as { name, url }}
        <a href="{url}" class="link" class:active="{currentPath === url}" on:click="{toggleNav}">{name}</a>
      {/each}
    </nav>
    <input type="text" placeholder="Search" />
    <h4>Toggle Theme</h4>
    <button on:click="{toggleTheme}" class="toggle-theme">
      <div class="indicator"></div>
    </button>
    <h4>Popular Tags</h4>
    <Tags />
  </div>
</aside>

<style>
  aside {
    @apply p-8 border-r-2 transition-all duration-300 ease-linear;
  }

  aside .sticky-scrollable {
    @apply sticky top-0 bottom-0 overflow-y-scroll;
  }

  aside .sticky-scrollable .logo-wrapper {
    @apply m-auto rounded-full text-center;

    width: 240px;
    height: 240px;
    transform: translate3d(0, 0, 0);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
    transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  aside .sticky-scrollable .logo-wrapper:active,
  aside .sticky-scrollable .logo-wrapper:focus,
  aside .sticky-scrollable .logo-wrapper:hover {
    @apply outline-none;

    transform: translate3d(0, -1px, 0);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }

  aside .sticky-scrollable .logo-wrapper .logo {
    @apply outline-none;
  }

  aside .sticky-scrollable .logo-wrapper .logo > img {
    @apply m-auto;

    width: 240px;
    height: 240px;
  }

  aside .sticky-scrollable h1 {
    @apply text-center my-6;
  }

  aside .sticky-scrollable .toggle-theme {
    @apply w-28 h-4 px-2 py-6 flex relative items-center outline-none overflow-hidden m-auto rounded-full transition-all duration-300 ease-linear;

    box-shadow: 3px 3px 20px -6px rgb(0 0 0 / 50%);
  }

  aside .sticky-scrollable .toggle-theme .indicator {
    @apply p-4 rounded-full relative border-none bg-white transition-all duration-300 ease-linear;

    transform: translateX(0);
  }

  aside .sticky-scrollable .toggle-theme .indicator::before {
    @apply block absolute w-full h-full rounded-full bg-red-500 origin-top transition-all duration-300 ease-linear;

    content: '';
    left: -100%;
    transform: translateX(0);
  }

  aside .sticky-scrollable nav {
    @apply w-full flex justify-between my-6;
  }

  aside .sticky-scrollable nav .link::after {
    @apply block h-0.5 w-0 transition-all duration-300 ease-in-out;

    content: '';
  }

  aside .sticky-scrollable nav .link:hover::after {
    @apply w-full;
  }

  aside .sticky-scrollable nav .link.active::after {
    @apply w-full;
  }

  aside .sticky-scrollable input {
    @apply w-full my-6 h-10 pl-2 outline-none;
  }

  aside .sticky-scrollable h4 {
    @apply my-6;
  }

  aside.dark .sticky-scrollable .logo-wrapper {
    @apply bg-black;
  }

  aside.dark .sticky-scrollable nav .link::after {
    @apply bg-white;
  }

  aside.dark .sticky-scrollable input {
    @apply bg-white text-black;
  }

  aside.dark .sticky-scrollable .toggle-theme {
    @apply bg-blue-700;
  }

  aside.dark .sticky-scrollable .toggle-theme .indicator {
    @apply bg-gradient-to-t from-teal-400 via-teal-700 to-indigo-800;

    transform: translateX(200%) rotate(25deg);
  }

  aside.dark .sticky-scrollable .toggle-theme .indicator::before {
    @apply bg-blue-700;

    transform: translateX(113%) rotate(90deg);
  }

  aside.light .sticky-scrollable .logo-wrapper {
    @apply bg-white;
  }

  aside.light .sticky-scrollable nav .link::after {
    @apply bg-black;
  }

  aside.light .sticky-scrollable input {
    @apply bg-black text-white;
  }

  aside.light .sticky-scrollable .toggle-theme {
    @apply bg-red-500;
  }

  aside.light .sticky-scrollable .toggle-theme .indicator {
    @apply bg-gradient-to-t from-pink-600 via-orange-600 to-yellow-500;
  }

  aside.light .sticky-scrollable .toggle-theme .indicator::before {
    @apply bg-red-500;
  }

  @screen <md {
    aside {
      @apply absolute border-r-0 w-full z-50;

      transform: translateX(-100%);
    }

    aside.open {
      transform: translateX(0);
    }
  }

</style>
