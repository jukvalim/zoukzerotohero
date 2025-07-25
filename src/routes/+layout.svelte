<script lang="ts">
	import '../app.css';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import Navigation from '$lib/Navigation.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
	let currentLocale = $derived(getLocale());

	// Check if Finnish language is disabled for this page
	let finnishDisabled = $derived($page.data?.disableFinnish ?? false);
</script>

<div class="grid grid-cols-12">
	<header
		class="col-span-10 col-start-2 flex items-center justify-between bg-white p-4 text-gray-800 mb-4 md:mb-8"
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
				onclick={() => !finnishDisabled && setLocale('fi')}
				class="flex items-center space-x-1 rounded px-2 py-1 transition-colors"
				class:bg-white={currentLocale === 'fi'}
				class:text-gray-800={currentLocale === 'fi'}
				class:font-bold={currentLocale === 'fi'}
				class:cursor-default={currentLocale === 'fi'}
				class:cursor-pointer={currentLocale !== 'fi' && !finnishDisabled}
				class:cursor-not-allowed={finnishDisabled}
				class:opacity-50={finnishDisabled}
				class:grayscale={finnishDisabled}
				disabled={finnishDisabled}
			>
				<span>🇫🇮</span><span>fi</span>
			</button>
		</div>
	</header>

	<main class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
		{@render children()}
	</main>
	<footer class="col-span-10 col-start-2 bg-white text-gray-800 mt-6">
	</footer>
</div>
