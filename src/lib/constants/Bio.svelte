<script lang="ts">
  import { navMenu } from '$lib/controller/store';

  const toggleNav = () => ($navMenu = $navMenu === 'close' ? 'open' : 'close');
</script>

<div class="bio">
  <a href="/" on:click="{toggleNav}">
    <img src="/img/logo-black.svg" alt="Vanity URL" />
  </a>
</div>

<style lang="postcss">
  .bio {
    @apply m-auto rounded-full text-center;

    width: 240px;
    height: 240px;
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
      @apply outline-none;

      > img {
        @apply m-auto;

        width: 240px;
        height: 240px;
      }
    }
  }
</style>
