<script>
  export let status;
  export let error;

  // Custom Error Page
  // https://kit.svelte.dev/docs#layouts-error-pages
</script>

<h1>{status}</h1>
<p>{error.message}</p>
