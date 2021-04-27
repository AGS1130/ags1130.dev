<script lang="ts">
  import { colorTheme } from '$lib/controller/store';

  const toggleTheme = () => {
    $colorTheme = $colorTheme === 'dark' ? 'light' : 'dark';
    document.querySelector('html').classList.toggle('dark');
  };
</script>

<button on:click="{toggleTheme}"> Toggle Theme </button>
