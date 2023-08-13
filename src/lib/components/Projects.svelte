<script>
	// import Web from "$lib/images/web.png";
	import Web from '$lib/images/Web.svg';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let nativeLoading = false;
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

{#if nativeLoading}
	<div class="flex flex-col gap-2">
		<a
			class="rounded-[8px] border-[1px] border-s-[#C2C2C2] bg-[#F4D160] w-full overflow-hidden max-h-[320px] relative max-w-[296px]"
			href="#"
			transition:fly={{ y: 250, duration: 1000, delay: 1000 }}
		>
			<div class="relative transition-all left-8 top-10 hover:-translate-y-4">
				<img src={Web} alt="web" class="w-full h-full" />
			</div>
		</a>
		<div
			class="inline-flex flex-col items-start gap-2"
			transition:fly={{ y: 250, duration: 1000, delay: 1200 }}
		>
			<p class="font-bold text-white text-subheading-2">Name Projects</p>
			<div class="flex flex-wrap gap-2 max-w-[296px]">
				<p class="px-2 py-1 text-white border-2 rounded-md text-[12px]">Jest Unit</p>
				<p class="px-2 py-1 text-white border-2 rounded-md text-[12px]">Jest Unit</p>
				<p class="px-2 py-1 text-white border-2 rounded-md text-[12px]">Jest Unit</p>
				<p class="px-2 py-1 text-white border-2 rounded-md text-[12px]">Jest Unit</p>
				<p class="px-2 py-1 text-white border-2 rounded-md text-[12px]">Jest Unit</p>
			</div>
		</div>
	</div>
{/if}

<style>
</style>
