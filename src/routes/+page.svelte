<script>
  import Project from "../components/Projects.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<main>
  <div class="flex flex-col items-center gap-12">
    <div class="flex flex-col gap-4 self-stretch">
      <p class="text-heading-2 text-center font-bold pt-5">
        Hi there! <br />Ardy's Here.
      </p>
      <p class="text-subheading-2 font-[700] text-center px-3">
        Passionate for Interactive, Impactful, and Great Website.
      </p>
    </div>
    <div
      class="bg-[#1D5D9B] min-h-screen flex w-full flex-col justify-center items-center gap-4 self-center p-6"
    >
      <p class="text-subheading-2 font-[700] text-white">Work.</p>
      <p class="text-[32px] text-center font-[700] text-white">
        Let’s Collaborate<br />For Something Great.
      </p>
      <Project />
      <Project />
    </div>
    <Footer />
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.white);
  }
</style>
