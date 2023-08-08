<script>
  export let title;
  export let isActive;
</script>

{#if isActive === title}
  <div class="flex p-2 rounded-[16px] border-s-[#1D5D9B] bg-[#1D5D9B]">
    <p class="text-white">{title}</p>
  </div>
{:else}
  <div class="flex p-2 rounded-[16px] border-s-[#1D5D9B]">
    <p class="text-white">{title}</p>
  </div>
{/if}
