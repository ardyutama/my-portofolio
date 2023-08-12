<script>
  import GithubIcon from "$lib/icons/mdi_github.svelte";
  import LinkedinIcon from "$lib/icons/mdi_linkedin.svelte";
  import DownloadIcon from "$lib/icons/material-symbols_download.svelte";
</script>

<div class="self-stretch p-6">
  <div class="flex flex-col items-start w-full gap-4 border-t-2">
    <div class="border-solid"></div>
    <div class="flex items-center gap-4">
      <GithubIcon />
      <LinkedinIcon />
    </div>
    <div class="flex items-center gap-1">
      <p>Resume CV</p>
      <DownloadIcon />
    </div>
    <p>2023 Gooddaytama</p>
  </div>
</div>
