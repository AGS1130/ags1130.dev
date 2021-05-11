<script lang="ts">
  import Tags from '$lib/components/Tags.svelte';
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>AGS1130 | Tags</title>
</svelte:head>

<h1>Tags</h1>

<p>For all tags available in website</p>
<Tags />

<style lang="postcss">
  h1 {
    @apply text-orange-500;

    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 2rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
