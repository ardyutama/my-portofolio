<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let nativeLoading = false;
	export let data
	onMount(() => {
		if ('loading' in HTMLImageElement.prototype) {
			nativeLoading = true;
		}
	});
</script>

{#if nativeLoading}
	<div class="flex flex-col max-w-md gap-2">
		<a
			class="rounded-[8px] border-[1px] border-s-[#C2C2C2] bg-[#F4D160] w-full overflow-hidden max-h-[320px] relative"
			href={data.link}
			transition:fly={{ y: 250, duration: 1000, delay: 1000 }}
		>
			<div class="relative transition-all left-8 top-10 hover:-translate-y-4">
				<img src={data.photo} alt="web" class="w-full h-full" />
			</div>
		</a>
		<div
			class="inline-flex flex-col items-start gap-2"
			transition:fly={{ y: 250, duration: 1000, delay: 1200 }}
		>
			<p class="font-bold text-white text-subheading-2">{data?.name}</p>
			<div class="flex flex-wrap gap-2">
				{#each data.tech as techs}
					<p class="px-2 py-1 text-white border-2 rounded-md text-[12px]">{techs}</p>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
</style>
