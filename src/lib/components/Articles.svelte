<script>
  import Tags from '$lib/components/Tags.svelte';

  export let isFeatured = false;

</script>

<!-- The loop is to test the UI -->
{#each { length: 5 } as _, i}
  <article>
    <header>
      <a href="https://google.com" target="_blank">
        <h2>Google</h2>
        <small>
          Published on
          <time>April 21, 2021</time>
        </small>
      </a>
    </header>
    {#if isFeatured}
      <a href="https://google.com" target="_blank">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google!" />
      </a>
    {/if}
    <div class="tags">
      <Tags />
    </div>
    {#if isFeatured}
      <div class="description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem excepturi aut aliquam ipsam fugiat!
          Mollitia vel rerum quasi omnis, illo earum repudiandae, excepturi ab esse, nesciunt minus praesentium vero!
        </p>
      </div>
    {/if}
    {#if isFeatured}
      <a href="https://google.com" target="_blank">
        <small>Keep reading →</small>
      </a>
    {/if}
  </article>
{/each}

<style>
  article {
    @apply pb-8 mb-16 text-left;
  }

  article header {
    @apply mb-8;
  }

  article header h2 {
    @apply mb-3;
  }

  article .tags {
    @apply mb-6;
  }

</style>
