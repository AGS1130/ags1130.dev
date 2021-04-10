<button>
  <span></span>
  <span></span>
  <span></span>
</button>

<style lang="postcss">
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
</style>
