<script lang="ts">
  import { page } from '$app/stores';
  import tags from '$lib/data/tags';
  import Posts from '$lib/components/Posts.svelte';

  let pageSlug = 'Tags';
  page.subscribe(({ params }) => {
    if (tags[params.slug]) {
      pageSlug = tags[params.slug].name;
    }
  });

</script>

<svelte:head>
  <!-- Primary Meta Archives -->
  <title>AGS1130 | {pageSlug} Posts</title>
</svelte:head>

<Posts />
