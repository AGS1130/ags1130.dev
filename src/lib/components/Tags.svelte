<script lang="ts">
  import tags from '$lib/data/tags';
  import { colorTheme, navMenu } from '$lib/data/store';

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');

</script>

{#each Object.entries(tags) as [tagName, { name, color, iconPath, gradient }] (tagName)}
  <button
    on:click="{toggleNav}"
    style="color: {$colorTheme === 'dark'
      ? color
      : color !== '#fff'
      ? '#fff'
      : '#000'}; background-color: {color}; background-image: {`${
      $colorTheme === 'dark' ? 'linear-gradient(#000, #000),' + gradient : gradient
    };`}; {$colorTheme === 'dark' ? 'background-origin: border-box; background-clip: content-box, border-box;' : ''}"
  >
    <a href="/tags/{tagName}">
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
        <path d="{iconPath}"></path>
      </svg>
    </a>
  </button>
{/each}

<style lang="postcss">
  button {
    @apply text-sm text-center uppercase overflow-hidden relative rounded-md p-2 mr-2 my-1;

    background-size: 110% auto;
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
      @apply inline-flex;

      > * {
        @apply mx-2 my-auto;
      }
    }
  }

</style>
