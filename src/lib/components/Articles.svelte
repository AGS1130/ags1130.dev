<!-- The loop is to test the UI -->
{#each { length: 5 } as _, i}
  <article>
    <header>
      <h2>
        <a href="https://google.com" target="_blank">Google</a>
      </h2>
      <small>
        Published on
        <time>April 21, 2021</time>
      </small>
    </header>
    <a href="https://google.com" target="_blank">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" alt="Google!" />
    </a>
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quidem excepturi aut aliquam ipsam fugiat!
        Mollitia vel rerum quasi omnis, illo earum repudiandae, excepturi ab esse, nesciunt minus praesentium vero!
      </p>
    </div>
    <a href="https://google.com" target="_blank">
      <small>Keep reading →</small>
    </a>
  </article>
{/each}

<style lang="postcss">
  article {
    @apply pb-8 mb-16 text-left;

    header {
      @apply mb-8;

      h2 {
        @apply mb-3;
      }
    }
  }

</style>
