<script lang="ts">
  import { colorTheme, navMenu } from '$lib/data/store';

  export let tags;

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');

</script>

{#if tags && tags.tags}
  {#each tags.tags as { name, color, iconPath, gradient, slug } (name)}
    <button
      on:click={toggleNav}
      style="color: {$colorTheme === 'dark'
        ? color
        : color !== '#fff'
        ? '#fff'
        : '#000'}; background-color: {color}; background-image: {`${
        $colorTheme === 'dark' ? 'linear-gradient(#000, #000),' + gradient : gradient
      };`}; {$colorTheme === 'dark' ? 'background-origin: border-box; background-clip: content-box, border-box;' : ''}"
    >
      <a href="/tags/{slug.current || `#`}">
        <p>{name}</p>
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="32"
          style="fill: {$colorTheme === 'dark' ? color : color !== '#fff' ? '#fff' : '#000'};"
        >
          <title>{name} Icon</title>
          <path d={iconPath} />
        </svg>
      </a>
    </button>
  {/each}
{/if}

<style>
  button {
    @apply text-sm text-center uppercase overflow-hidden relative rounded-md p-2 mr-2 my-1;

    background-size: 110% auto;
    transform: translate3d(0, 0, 0);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.26);
    transition: box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  button:active,
  button:focus,
  button:hover {
    @apply outline-none;

    transform: translate3d(0, -1px, 0);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  }

  button > a {
    @apply inline-flex;

    > * {
      @apply mx-2 my-auto;
    }
  }

</style>
