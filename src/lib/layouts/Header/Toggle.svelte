<script lang="ts">
  import { navMenu } from '$lib/controller/store';

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');
</script>

<button class="{$navMenu}" on:click="{toggleNav}">
  <span></span>
  <span></span>
  <span></span>
</button>

<style lang="postcss">
  button {
    @apply flex flex-col justify-around my-auto cursor-pointer p-0 bg-transparent border-none z-10 h-8;

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
</style>
