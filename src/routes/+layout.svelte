<script lang="ts">
	import '../app.css';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';

	let { children } = $props();
	let currentLocale = $derived(getLocale());
</script>

<div class="grid grid-cols-12 min-h-screen">
	<header class="bg-white text-gray-800 p-4 flex items-center justify-between col-start-2 col-span-10">
		<div class="flex items-center">
			<!-- Left side: Add logo or site name here if needed -->
			<span class="font-bold text-lg"></span>
		</div>
		<div class="flex items-center space-x-2">
			<button
				onclick={() => setLocale('fi')}
				class="flex items-center space-x-1 px-2 py-1 rounded transition-colors"
				class:bg-white={currentLocale === 'fi'}
				class:text-gray-800={currentLocale === 'fi'}
				class:font-bold={currentLocale === 'fi'}
				class:cursor-default={currentLocale === 'fi'}
				class:cursor-pointer={currentLocale !== 'fi'}
			>
				<span>🇫🇮</span><span>fi</span>
			</button>
			<button
				onclick={() => setLocale('en')}
				class="flex items-center space-x-1 px-2 py-1 rounded transition-colors"
				class:bg-white={currentLocale === 'en'}
				class:text-gray-800={currentLocale === 'en'}
				class:font-bold={currentLocale === 'en'}
				class:cursor-default={currentLocale === 'en'}
				class:cursor-pointer={currentLocale !== 'en'}
			>
				<span>🇬🇧</span><span>en</span>
			</button>
		</div>
	</header>
	<main class="col-start-2 col-span-10 lg:col-start-3 lg:col-span-8">
		{@render children()}
	</main>
	<footer class="bg-white text-gray-800 col-start-2 col-span-10">
		<p></p>
	</footer>
</div>
