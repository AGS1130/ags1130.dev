<script lang="ts">
  import { navMenu } from '$lib/data/store';

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');

</script>

<header>
  <button class="{$navMenu}" on:click="{toggleNav}">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <a href="/"><h1>AGS1130</h1></a>
</header>

<style lang="postcss">
  header {
    @apply m-0 p-8 top-0 w-full z-10 flex flex-row bg-black;

    button {
      @apply flex flex-col justify-around my-auto cursor-pointer h-8;

      &:focus {
        outline: none;
      }

      span {
        @apply relative w-8 h-1 rounded-xl bg-white transition-all duration-300 ease-linear;

        transform-origin: 1px;

        &:first-child {
          transform: rotate(0);
        }

        &:nth-child(2) {
          opacity: 1;
          transform: translateX(0);
        }

        &:nth-child(3) {
          transform: rotate(0);
        }
      }

      &.open {
        span {
          &:first-child {
            transform: rotate(45deg);
          }

          &:nth-child(2) {
            opacity: 0;
            transform: translateX(20px);
          }

          &:nth-child(3) {
            transform: rotate(-45deg);
          }
        }
      }
    }

    a {
      @apply text-white m-auto;

      h1 {
        @apply m-auto;
      }
    }
  }

  @media (min-width: 800px) {
    header {
      @apply hidden;
    }
  }

</style>
