<script>
	import Project from '$lib/components/Projects.svelte';

	import { fade, fly, blur } from 'svelte/transition';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<main>
	{#if ready}
		<div class="flex flex-col items-center gap-12">
			<div class="flex flex-col self-stretch gap-4">
				<p
					class="pt-5 font-bold text-center text-heading-2"
					transition:fly={{ y: 250, duration: 1000 }}
				>
					Hi there! <br />Ardy's Here.
				</p>
				<p
					class="px-3 font-medium text-center text-subheading-2"
					transition:fly={{ y: 250, duration: 1000, delay: 500 }}
				>
					Passionate for Interactive, Impactful, and Great Website.
				</p>
			</div>
			<div
				class="bg-[#1D5D9B] min-h-screen flex w-full flex-col justify-center items-center gap-4 self-center p-6"
			>
				<p class="text-subheading-2 font-[700] text-white">Work.</p>
				<p class="text-[32px] text-center font-medium text-white">
					Let’s Collaborate<br />For Something Great.
				</p>
				<div class="flex flex-col gap-4 lg:inline-grid lg:grid-cols-12 lg:gap-6">
					<div class="col-span-6 ">
						<Project />
					</div>
          <div class="col-span-6">
						<Project />
					</div>
				</div>
			</div>
		</div>
	{/if}
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
