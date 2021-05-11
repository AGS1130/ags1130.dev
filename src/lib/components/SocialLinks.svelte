<script lang="ts">
  import { colorTheme } from '$lib/data/store';
  import socialLinks from '$lib/data/social';
</script>

<div class="social-links">
  {#each socialLinks as { name, url, iconPath }}
    <a href="{url}" target="_blank">
      <span title="{name}">
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="{$colorTheme === 'dark' ? '#fff' : '#000'}"
        >
          <title>{name} Icon</title>
          <path d="{iconPath}"></path>
        </svg>
      </span>
    </a>
  {/each}
</div>

<style lang="postcss">
  .social-links {
    @apply flex justify-center self-center w-full my-6;

    a {
      @apply m-2;

      svg {
        @apply transition-all duration-300 ease-linear;

        width: 26px;
        height: 26px;
      }

      &:hover {
        svg {
          @apply fill-current text-primary-500;
        }
      }
    }
  }
</style>
