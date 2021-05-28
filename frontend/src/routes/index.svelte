<script lang="ts">
  import { content } from '$lib/data/fetchClient';
  import Articles from '$lib/components/Articles.svelte';

  let articles;

</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>AGS1130 | Home</title>
</svelte:head>

<Articles isFeatured={true} />
