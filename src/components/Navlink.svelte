<script>
  export let path;
  export let name;
  import { page } from "$app/stores";
  let currentPath;
  function getPath(path) {
    currentPath = path;
    console.log(currentPath);
  }

  $: getPath($page.url.pathname);
  console.log(path, name, currentPath);
</script>

<li>
  {#if { currentPath } === { path }}
    <a href={path} class="text-[#272727]">{name} /</a>
  {:else}
    <a href={path} class="text-[#969696]">{name}</a>
  {/if}
</li>
