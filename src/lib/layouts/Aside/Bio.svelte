<div>
  <a href="/">
    <div class="img-wrapper">
      <img src="/img/logo-black.svg" alt="Vanity URL" />
    </div>
  </a>
  <h1>AGS1130</h1>
</div>

<style lang="postcss">
  div {
    @apply text-center;

    > a {
      @apply outline-none;

      .img-wrapper {
        @apply m-auto rounded-full inline-flex;

        /* bg-gradient-to-r from-green-400 to-green-700; */

        width: 160px;
        height: 160px;
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

        > img {
          @apply m-auto;

          width: 160px;
          height: 160px;
        }
      }
    }
  }
</style>
