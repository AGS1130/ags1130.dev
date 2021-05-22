<script lang="ts">
  import { onMount } from 'svelte';
  import { content } from '$lib/data/fetchClient';
  import Articles from '$lib/components/Articles.svelte';

  let articles;

  onMount(async () => {
    const query = "*[_type == 'article']{_id}";

    await content
      .fetch(query)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  });
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>AGS1130 | Home</title>
</svelte:head>

<Articles isFeatured={true} />
