<script>
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	let currentPath;

	function getPath(path) {
		currentPath = path;
	}

	$: getPath($page.url.pathname);
</script>

<header class="sticky top-0 left-0 right-0 z-10 flex items-center self-stretch w-full px-6 ">
	<nav class="relative flex items-center justify-center w-full m-auto mt-4 md:max-w-[360px]">
		<ul class="flex p-4 items-start gap-4 rounded-[24px] bg-[#FAFAFD] w-full justify-start md:justify-center">
			<li>
				<a href="/" class:active={currentPath === '/'}>
					Home
					{#if currentPath === '/'}
						<span class="animate-slash w-[0.1rem] absolute top-[37%] h-[30%] ml-[0.3rem] bg-black"
						></span>
					{/if}
				</a>
			</li>
			<li>
				<a href="/about" class:active={currentPath === '/about'}>
					About
					{#if currentPath === '/about'}
						<span class="animate-slash w-[0.1rem] absolute top-[37%] h-[30%] ml-[0.3rem] bg-black"
						></span>
						<span class="pl-3">Me</span>
					{/if}
				</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	a {
		@apply appearance-none text-[#969696];
	}
	.active {
		@apply text-[#272727];
	}

	.animate-slash {
		animation: miringin-slash 0.5s ease-in;
		transform: rotate(15deg);
	}

	@keyframes miringin-slash {
		0% {
			transform: rotate(0deg);
			opacity: 0%;
		}
		70% {
			transform: rotate(0deg);
			opacity: 100%;
		}
		100% {
			transform: rotate(15deg);
			opacity: 100%;
		}
	}
</style>
