<script lang="ts">
  // https://github.com/AGS1130/developer-blog-frontend/tree/master/src/layouts/Header
</script>

<header>
  <button>
    <span></span>
    <span></span>
    <span></span>
  </button>
  <h1><a href="/">AGS1130</a></h1>
</header>

<style lang="postcss">
  header {
    @apply m-0 p-3 top-0 w-full z-10 flex flex-row bg-black md:hidden;

    button {
      @apply flex flex-col justify-around cursor-pointer p-0 bg-transparent border-none z-10 h-8;

      &:focus {
        outline: none;
      }

      span {
        @apply relative w-8 h-1 rounded-xl bg-white;

        transition: all 0.3s linear;
        transform-origin: 1px;
      }
    }

    h1 {
      @apply m-auto;

      a {
        @apply text-white;
      }
    }
  }
</style>
