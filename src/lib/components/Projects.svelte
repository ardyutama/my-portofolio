<script>
  // import Web from "$lib/images/web.png";
  import Web from "$lib/images/Web.svg"
  import { onMount } from 'svelte'
  import { fade, fly, blur } from "svelte/transition";
  
  let nativeLoading = false
  onMount(() => {
  if ('loading' in HTMLImageElement.prototype) {
    nativeLoading = true
  }
})
</script>

{#if nativeLoading}
<a
  class="rounded-[8px] border-[1px] border-s-[#C2C2C2] bg-[#F4D160] w-full overflow-hidden max-h-[320px] relative"
  href="#"
  transition:fly={{ y: 250, duration: 1000, delay: 1000 }}
>
  <div class="relative transition-all left-8 top-10 hover:top-6">
      <img src={Web} alt="web" class="w-full h-full" />
    </div>
  </a>
  {/if}

<style>
</style>
