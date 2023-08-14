<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	export let data;
</script>

<Navbar />
{#key data.pathname}
	<div in:fade={{ duration: 300, delay: 400 }} out:fade={{ duration: 300 }}>
		<slot />
	</div>
{/key}
<Footer />
