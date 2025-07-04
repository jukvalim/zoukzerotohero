<script lang="ts">
	import '../app.css';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import Navigation from '$lib/Navigation.svelte';

	let { children } = $props();
	let currentLocale = $derived(getLocale());
</script>

<div class="grid min-h-screen grid-cols-12">
	<header
		class="col-span-10 col-start-2 flex items-center justify-between bg-white p-4 text-gray-800"
	>
		<!-- Left side: Add logo or site name here if needed
		<div class="flex items-center">

			<span class="font-bold text-lg"></span>
		</div>-->

		<Navigation />

		<div class="flex items-center space-x-2">
			<button
				onclick={() => setLocale('en')}
				class="flex items-center space-x-1 rounded px-2 py-1 transition-colors"
				class:bg-white={currentLocale === 'en'}
				class:text-gray-800={currentLocale === 'en'}
				class:font-bold={currentLocale === 'en'}
				class:cursor-default={currentLocale === 'en'}
				class:cursor-pointer={currentLocale !== 'en'}
			>
				<span>🇬🇧</span><span>en</span>
			</button>
			<button
				onclick={() => setLocale('fi')}
				class="flex items-center space-x-1 rounded px-2 py-1 transition-colors"
				class:bg-white={currentLocale === 'fi'}
				class:text-gray-800={currentLocale === 'fi'}
				class:font-bold={currentLocale === 'fi'}
				class:cursor-default={currentLocale === 'fi'}
				class:cursor-pointer={currentLocale !== 'fi'}
			>
				<span>🇫🇮</span><span>fi</span>
			</button>
		</div>
	</header>

	<main class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
		{@render children()}
	</main>
	<footer class="col-span-10 col-start-2 bg-white text-gray-800">
		<p></p>
	</footer>
</div>
