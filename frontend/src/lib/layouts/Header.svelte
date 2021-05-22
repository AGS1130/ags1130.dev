<script lang="ts">
  import { navMenu } from '$lib/data/store';

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');
</script>

<header>
  <button class={$navMenu} on:click={toggleNav}>
    <span />
    <span />
    <span />
  </button>
  <a href="/"><h1>AGS1130</h1></a>
</header>

<style>
  header {
    @apply m-0 p-8 top-0 w-full z-10 bg-black;
  }

  header button {
    @apply absolute flex flex-col justify-around cursor-pointer h-8;
  }

  header button:focus {
    @apply outline-none;
  }

  header span {
    @apply relative w-8 h-1 rounded-xl bg-white transition-all duration-300 ease-linear;

    transform-origin: 1px;
  }

  header span:first-child {
    transform: rotate(0);
  }

  header span:nth-child(2) {
    opacity: 1;
    transform: translateX(0);
  }

  header span:nth-child(3) {
    transform: rotate(0);
  }

  header button.open span:first-child {
    transform: rotate(45deg);
  }

  header button.open span:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  header button.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  header a {
    @apply text-white text-center m-auto;
  }

  header a h1 {
    @apply m-auto;
  }

  @screen md {
    header {
      @apply hidden;
    }
  }
</style>
