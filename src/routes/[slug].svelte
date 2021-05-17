<script lang="ts">
  import { page } from '$app/stores';
  import Post from '$lib/components/Post.svelte';

  let pageSlug = 'Post';
  page.subscribe(({ params }) => {
    if (params.slug) {
      pageSlug = params.slug;
    }
  });

</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>AGS1130 | {pageSlug}</title>
</svelte:head>

<Post />
