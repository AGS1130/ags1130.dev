<svelte:head>
  <!-- Primary Meta Tutorials -->
  <title>AGS1130 | Tutorials</title>
</svelte:head>

<h1>Tutorials</h1>

<p>This is where all the full tutorials will live.</p>

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
