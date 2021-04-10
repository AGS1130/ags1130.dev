<script lang="ts">
  import Toggle from './Toggle.svelte';
  // https://github.com/AGS1130/developer-blog-frontend/tree/master/src/layouts/Header
</script>

<header>
  <Toggle />
  <h1><a href="/">AGS1130</a></h1>
</header>

<style lang="postcss">
  header {
    @apply m-0 p-3 top-0 w-full z-10 flex flex-row bg-black md:hidden;

    h1 {
      @apply m-auto;

      a {
        @apply text-white;
      }
    }
  }
</style>
