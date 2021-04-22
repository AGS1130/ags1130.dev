<script lang="ts">
  import { tags } from '$lib/utils/tags';
  import Tag from './Tag.svelte';
</script>

{#each Object.entries(tags) as [tagName, { name, color, iconPath, gradient }] (tagName)}
  <Tag tagName="{tagName}" name="{name}" color="{color}" gradient="{gradient}" iconPath="{iconPath}" />
{/each}
