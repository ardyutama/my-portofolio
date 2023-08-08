<script>
  import Footer from "../../components/Footer.svelte";
  import { fade, fly, blur } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let node;
  let nodeExperiences;

  $: isTagActive = 0;

  const experiences = [
    {
      startDate: "May 2022",
      endDate: "Aug 2022",
      position: "Frontend Engineer Intern",
      company: "Pinhome",
      skills: [
        "Jest Unit",
        "Javascript",
        "ReactJS",
        "TailwindCSS",
        "Storybook",
        "Figma",
      ],
    },
  ];
  const contents = [
    {
      title: "Software Engineer",
      description:
        "I am a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, Jamstack (JavaScript, APIs + Markup) and GraphQL.",
    },
    {
      title: "Frontend Developer",
      description:
        "I am a frontend developer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, Jamstack (JavaScript, APIs + Markup) and GraphQL.",
    },
    {
      title: "Frontend Engineer",
      description:
        "I am a frontend engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, Jamstack (JavaScript, APIs + Markup) and GraphQL.",
    },
  ];
  let description = contents[0].description;
</script>

<div class="flex flex-col items-center gap-6 self-stretch">
  <IntersectionObserver once element={node} let:intersecting threshold={0.5}>
    <div bind:this={node}>
      {#if intersecting}
        <div
          transition:fade={{ delay: 250, duration: 300 }}
          class="flex flex-col gap-3 mt-6"
        >
          <p class="text-heading-2 text-center font-bold">I'm Ardy.</p>
          <p class="text-subheading-2 text-center px-5">
            Your Friendly Neighborhood Developer.
          </p>
        </div>
        <div
          transition:fade={{ delay: 400, duration: 500 }}
          class="flex items-start flex-col self-stretch px-6 gap-4 mt-6"
        >
          <p class="text-subheading-2 text-justify font-bold">
            I learn many roles like,
          </p>
          <div class="flex gap-2 items-start content-start flex-wrap">
            {#each contents as content, index}
              <button
                on:click={() => {
                  isTagActive = index;
                  description = contents[index].description;
                }}
                class:active={isTagActive === index}>{content.title}</button
              >
            {/each}
          </div>
          {#key description}
            <div class="self-stretch" in:fade={{ delay: 250, duration: 300 }}>
              {description}
            </div>
          {/key}
        </div>
      {/if}
    </div>
  </IntersectionObserver>
  <div
    class="bg-[#1D5D9B] min-h-screen w-full flex justify-center items-center"
  >
    <IntersectionObserver
      element={nodeExperiences}
      let:intersecting
      threshold={0.5}
      once
    >
      <div bind:this={nodeExperiences}>
        {#if intersecting}
          <div
            transition:fly={{ y: 250, duration: 2000 }}
            class="flex flex-col justify-center items-start gap-6 self-stretch p-6"
          >
            <p class="text-subheading-2 font-[700] text-white">
              This is my latest experiences,
            </p>
            {#each experiences as experience}
              <ol class="border-l-2 border-[#F4D160]">
                <li>
                  <div class="flex-start flex items-start">
                    <div
                      class="-ml-[7px] -mt-2 mr-3 flex flex-none items-start justify-center rounded-full bg-[#F4D160] w-[12px] h-[12px]"
                    ></div>
                    <div
                      class="flex flex-col items-start self-stretch gap-2 pb-6"
                    >
                      <div class="gap-0">
                        <p class="-mt-2 text-white text-[12px]">
                          {experience.startDate} - {experience.endDate}
                        </p>
                        <p class="text-white text-[16px]">
                          {experience.position}
                        </p>
                        <p class="text-white text-[16px]">
                          {experience.company}
                        </p>
                      </div>
                      <div class="flex-start flex gap-1 flex-wrap">
                        {#each experience.skills as skill}
                          <p
                            class="px-2 py-1 rounded-[16px] border-white text-white border-[1px] text-[10px]"
                          >
                            {skill}
                          </p>
                        {/each}
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            {/each}
          </div>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  <div class="min-h-screen flex flex-col px-6 py-3 gap-6 justify-center w-full">
    <p class="text-subheading-2 font-[700]">
      I'm also have learned skills like,
    </p>
    <div class="flex flex-col items-center gap-3 self-stretch">
      <p>Tech Stacks.</p>
      <div class="flex flex-wrap">
        <p
          class="px-2 py-1 rounded-[16px] border-[#1D5D9B] text-[#1D5D9B] border-[1px] text-[10px]"
        >
          Jest Unit
        </p>
      </div>
    </div>
  </div>
  <Footer />
</div>

<style>
  button {
    @apply flex p-2 rounded-[16px] border-[#1D5D9B] border-[1px];
  }
  .active {
    @apply bg-[#1D5D9B] text-white rounded-[16px] border-s-[#1D5D9B] p-2 flex;
  }
</style>
