<script lang="ts">
  import Post from './Post.svelte';
</script>

<!-- The loop is to test the UI -->
{#each { length: 3 } as _, i}
  <Post />
{/each}
