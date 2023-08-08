<script>
  import { page } from "$app/stores";
  let currentPath;
  function getPath(path) {
    currentPath = path;
  }

  $: getPath($page.url.pathname);
</script>

<header class="flex top-0 right-0 left-0 w-full px-4 sticky z-10">
  <nav class="flex justify-center items-center m-auto relative mt-4 w-full">
    <ul
      class="flex p-4 items-start gap-3 rounded-[24px] bg-[#FAFAFD] w-full justify-start"
    >
      <li>
        <a href="/" class:active={currentPath === "/"}>
          Home
          {#if currentPath === "/"}
            <span>/</span>
          {/if}
        </a>
      </li>
      <li>
        <a href="/about" class:active={currentPath === "/about"}>
          About
          {#if currentPath === "/about"}
            <span>/</span>
          {/if}
        </a>
      </li>
    </ul>
  </nav>
</header>

<style>
  a {
    @apply text-[#969696];
  }
  .active {
    @apply text-[#272727];
  }
</style>
