<script>
  import { fade, fly } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  import { browser } from "$app/environment";
  import { writable } from 'svelte/store'
  import { setContext } from "svelte";
  
  let node;
  let nodeExperiences;
  let now;
  // let value;
  export const value = writable("main")
  setContext('test', value)
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

  if (browser) {
    now = document.getElementsByTagName("section")[0]?.id;

    let sections = document.getElementsByTagName("section");

    function CheckScroll(el, index, scroll) {
      if (scroll > el.offsetTop && scroll <= sections[index + 1]?.offsetTop) {
        now = el.id;
      } else if (scroll > el.offsetTop && sections[index + 1] == undefined) {
        now = el.id;
      }
    }
    window.addEventListener("scroll", function (e) {
      for (let i = 0; i < sections.length; i++) {
        CheckScroll(sections[i], i, this.scrollY);
      }
    });
  }
</script>

<div class="flex flex-col items-center self-stretch gap-6">
  <IntersectionObserver once element={node} let:intersecting threshold={0.5}>
    <section id="me" bind:this={node} class="min-h-screen">
      {#if intersecting}
        <div
          transition:fade={{ delay: 250, duration: 300 }}
          class="flex flex-col items-center gap-3 mt-6"
        >
        <div class="w-32 h-32 bg-gray-400 rounded-full">

        </div>
          <p class="font-bold text-center text-heading-2">I'm Ardy.</p>
          <p class="px-5 text-center text-subheading-2">
            Your Friendly Neighborhood Developer.
          </p>
        </div>
        <div
          transition:fade={{ delay: 400, duration: 500 }}
          class="flex flex-col items-start self-stretch gap-4 px-6 mt-6"
        >
          <p class="font-bold text-justify text-subheading-2">
            I learn many <br />roles like,
          </p>
          <div class="flex flex-wrap items-start content-start gap-2">
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
            <div
              class="self-stretch text-justify"
              in:fade={{ delay: 250, duration: 300 }}
            >
              {description}
            </div>
          {/key}
        </div>
      {/if}
    </section>
  </IntersectionObserver>
  <section
    id="experiences"
    class="bg-[#1D5D9B] min-h-screen w-full flex justify-center items-center"
  >
    <IntersectionObserver
      element={nodeExperiences}
      let:intersecting
      threshold={1}
      once
    >
      <div id="" bind:this={nodeExperiences}>
        {#if intersecting}
          <div
            transition:fly={{ y: 250, duration: 2000 }}
            class="flex flex-col items-start self-stretch justify-center gap-6 p-6"
          >
            <p class="text-subheading-2 font-[700] text-white">
              This is my latest experiences,
            </p>
            {#each experiences as experience}
              <ol class="border-l-2 border-[#F4D160]">
                <li>
                  <div class="flex items-start flex-start">
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
                      <div class="flex flex-wrap gap-1 flex-start">
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
  </section>
  <section
    id="skills"
    class="flex flex-col w-full min-h-screen gap-6 px-6 py-3 mt-16"
  >
    <p class="text-subheading-2 font-[700] tracking-tight">
      I'm also have <br />learned skills like,
    </p>
    <div class="flex flex-col items-center self-stretch gap-3">
      <p>Tech Stacks.</p>
      <div class="flex flex-wrap">
        <p
          class="px-2 py-1 rounded-[16px] border-[#1D5D9B] text-[#1D5D9B] border-[1px] text-[10px]"
        >
          Jest Unit
        </p>
      </div>
    </div>
  </section>
</div>

<style>
  button {
    @apply flex rounded-[16px] border-[1px] border-[#1D5D9B] p-2;
  }
  .active {
    @apply flex rounded-[16px] border-s-[#1D5D9B] bg-[#1D5D9B] p-2 text-white;
  }
</style>
