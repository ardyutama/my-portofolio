<script>
	import { fade, fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import Portrait from '$lib/images/portrait.png';

	let now;
	let intersecting;
	let intersectingExperiences;
	const handleChange = (event) => {
		const { inView } = event.detail;
		intersecting = inView;
	};
	export const value = writable('main');
	setContext('test', value);
	$: isTagActive = 0;

	const experiences = [
		{
			startDate: 'Aug 2022',
			endDate: 'Feb 2023',
			position: 'Data Engineer Intern',
			company: 'PT VKTR Indonesia',
			skills: ['Python', 'cantools', 'Apache Spark', 'Apache Hadoop', 'Pyspark', 'Cassandra']
		},
		{
			startDate: 'May 2022',
			endDate: 'Aug 2022',
			position: 'Frontend Engineer Intern',
			company: 'Pinhome',
			skills: ['Jest Unit', 'Javascript', 'ReactJS', 'NextJS', 'Jira', 'Redux.js']
		},
		{
			startDate: 'Jan 2022',
			endDate: 'Apr 2022',
			position: 'Full-stack Developer',
			company: 'Bank UMKM Jawa Timur',
			skills: ['ReactJS', 'Laravel', 'UI/UX', 'Research UX', 'Figma', 'PHP']
		}
	];

	const contents = [
		{
			title: 'Software Engineer',
			description:
				'As an undergraduate student with a passion for software engineering, I seek for the opportunity to broaden my knowledge and skills through internship and study abroad. Through my studies, I have gained expertise in various programming languages and software development methodologies, as well as experience in collaborating with diverse teams to create and deliver high-quality software products. I am motivated for more collaboration, improve soft skills and eager to continue learning and growing in this field.'
		},
		{
			title: 'Frontend Engineer',
			description:
				'I am a frontend developer who is passionate about making website and web design. I learn about how to make website more valuable and user-friendly using UI/UX design. By making code usable, it will make more readable and best practices.'
		},
		{
			title: 'Data Engineer',
			description:
				'I am a data engineer who is passionate about learning processing data flow and making the pipeline. With using the technology like Apache Spark and Kafka to collecting data from another source and processed it. By making the pipeline, the purpose is to help others as analyze the data has the dataset and can be visualize to another team.'
		}
	];

	const skills = {
			tech_stacks:['Python','Big Data','Apache Spark', 'Apache Hadoop','Cassandra','Docker', 'Bash Script','Google Cloud Platform','ReactJS','Redux','Typescript','Laravel','DevOps','Amazon Web Services'],
			tools:['Figma','Github','Jira','Gitlab']
		}
	

	let description = contents[0].description;

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
	<div use:inview on:inview_enter={handleChange}>
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
				const { entry, node } = event.detail;
				intersectingExperiences = entry.isIntersecting;
			}}
			class="md:col-span-7"
		>
			{#if intersectingExperiences}
				<div
					transition:fly={{ y: 250, duration: 1500 }}
					class="flex flex-col items-start self-stretch justify-center gap-6 m-6 mt-4 md:col-span-5"
				>
					<p class="text-subheading-2 font-[700] text-white md:text-[24px]">
						This is my latest experiences,
					</p>
					{#each experiences as experience}
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
			<div class="flex flex-wrap md:max-w-[675px] gap-2 justify-center ">
				{#each skills.tech_stacks as tech}
				<span
				class="px-2 py-1 rounded-[16px] border-[#1D5D9B] text-[#1D5D9B] border-[1px] text-[12px] lg:text-[16px]"
				>
				{tech}
			</span>
			{/each}
			</div>
			<p class="lg: text-[20px] font-bold">Tools.</p>
			<div class="flex flex-wrap md:max-w-[675px] gap-2 justify-center ">
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
