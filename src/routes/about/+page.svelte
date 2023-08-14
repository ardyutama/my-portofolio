<script>
	import { fade, fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import Portrait from '$lib/images/portrait.png';
	import { contents, experiences, skills } from '$lib/components/Content.js';

	let now;
	let intersecting;
	let intersectingExperiences;

	$: isTagActive = 0;
	let description = contents[0]?.description;

	if (browser) {
		now = document.getElementsByTagName('section')[0]?.id;

		let sections = document.getElementsByTagName('section');

		function CheckScroll(el, index, scroll) {
			if (scroll > el.offsetTop && scroll <= sections[index + 1]?.offsetTop) {
				now = el.id;
			} else if (scroll > el.offsetTop && sections[index + 1] == undefined) {
				now = el.id;
			}
		}
		window.addEventListener('scroll', function (e) {
			for (let i = 0; i < sections.length; i++) {
				CheckScroll(sections[i], i, this.scrollY);
			}
		});
	}
</script>

<div class="flex flex-col items-center self-stretch gap-6">
	<div
		use:inview
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			intersecting = inView;
		}}
	>
		<section id="me" class="min-h-screen">
			{#if intersecting}
				<div
					transition:fade={{ delay: 250, duration: 300 }}
					class="flex flex-col items-center gap-3 mt-6"
				>
					<div class="w-48 h-48">
						<img src={Portrait} alt="Photos" />
					</div>
					<p class="font-bold text-center text-heading-2">I'm Ardy.</p>
					<p class="px-5 text-center text-subheading-2">Your Friendly Neighborhood Developer.</p>
				</div>
				<div
					transition:fade={{ delay: 400, duration: 500 }}
					class="flex flex-col items-start min-w-0 gap-4 px-6 mt-6 md:items-center"
				>
					<p class="font-bold text-justify text-subheading-2">I learn many roles like,</p>
					<div class="flex flex-wrap items-start content-start gap-2 md:justify-center">
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
							class="max-w-[675px] text-justify lg:text-[20px]"
							in:fade={{ delay: 250, duration: 300 }}
						>
							<p>{description}</p>
						</div>
					{/key}
				</div>
			{/if}
		</section>
	</div>
	<section
		id="experiences"
		class="bg-[#1D5D9B] min-h-screen w-full flex justify-center items-center md:grid md:grid-cols-12 md:gap-6 md:px-[5%]"
	>
		<div
			use:inview
			on:inview_enter={(event) => {
				const { entry } = event.detail;
				intersectingExperiences = entry.isIntersecting;
				console.log(intersectingExperiences);
			}}
			class="md:col-span-7"
		>
			{#if intersectingExperiences}
				<div
					class="flex flex-col items-start self-stretch justify-center gap-6 m-6 mt-4 md:col-span-5"
					transition:fly={{ y: 250, duration: 1500, delay: 200 }}
				>
					<p class="text-subheading-2 font-[700] text-white md:text-[24px]">
						This is my latest experiences,
					</p>
					{#each experiences as experience, index}
						<ol class="border-l-2 border-[#F4D160]">
							<li>
								<div class="flex items-start flex-start">
									<div
										class="-ml-[7px] -mt-2 mr-3 flex flex-none items-start justify-center rounded-full bg-[#F4D160] w-[12px] h-[12px]"
									></div>
									<div class="flex flex-col items-start self-stretch gap-2 pb-6">
										<div class="gap-0">
											<p class="-mt-2 text-white text-[12px] md:text-[20px]">
												{experience.startDate} - {experience.endDate}
											</p>
											<p class="text-white text-[16px] md:text-[32px] font-bold">
												{experience.position}
											</p>
											<p class="text-white text-[16px md:text-[32px] md:font-normal">
												{experience.company}
											</p>
										</div>
										<div class="flex flex-wrap gap-1 flex-start">
											{#each experience.skills as skill}
												<p
													class="px-2 py-1 rounded-[16px] border-white text-white border-[1px] text-[12px] md:text-[16px]"
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
	</section>
	<section id="skills" class="flex flex-col items-center w-full gap-6 px-6 py-3">
		<p class="text-subheading-2 font-[700] tracking-tight lg:text-[24px]">
			I'm also have learned skills like,
		</p>
		<div class="flex flex-col items-center self-stretch gap-3">
			<p class="lg: text-[20px] font-bold">Tech Stacks.</p>
			<div class="flex flex-wrap md:max-w-[675px] gap-2 justify-center">
				{#each skills.tech_stacks as tech}
					<span
						class="px-2 py-1 rounded-[16px] border-[#1D5D9B] text-[#1D5D9B] border-[1px] text-[12px] lg:text-[16px]"
					>
						{tech}
					</span>
				{/each}
			</div>
			<p class="lg: text-[20px] font-bold">Tools.</p>
			<div class="flex flex-wrap md:max-w-[675px] gap-2 justify-center">
				{#each skills.tools as tool}
					<span
						class="px-2 py-1 rounded-[16px] border-[#1D5D9B] text-[#1D5D9B] border-[1px] text-[12px] lg:text-[16px]"
					>
						{tool}
					</span>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	button {
		@apply flex rounded-[16px] border-[1px] border-[#1D5D9B] p-2 text-[#1D5D9B];
	}
	.active {
		@apply flex rounded-[16px] border-s-[#1D5D9B] bg-[#1D5D9B] p-2 text-white;
	}
</style>
