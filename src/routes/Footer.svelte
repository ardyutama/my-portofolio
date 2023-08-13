<script>
  import GithubIcon from "$lib/icons/mdi_github.svelte";
  import LinkedinIcon from "$lib/icons/mdi_linkedin.svelte";
  import DownloadIcon from "$lib/icons/material-symbols_download.svelte";
</script>

<div class="self-stretch p-6">
  <div class="flex flex-col items-start w-full gap-4 border-t-2">
    <div class="border-solid"></div>
    <div class="flex items-center gap-4">
      <a href="https://github.com/ardyutama?tab=repositories">
        <GithubIcon />
      </a>
      <a href="https://www.linkedin.com/in/ardy-putra-utama/">
        <LinkedinIcon />
      </a>
    </div>
    <div class="flex items-center gap-1">
      <p>Resume CV</p>
      <a href="https://drive.google.com/drive/folders/1YLvqw-4UucPRMkS8nbWTmSoH19O76n-_?usp=sharing">
        <DownloadIcon />
      </a>
    </div>
    <p>2023 Gooddaytama</p>
  </div>
</div>
