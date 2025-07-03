<script lang="ts">
	import '../app.css';
	import { setLocale, getLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';

	let { children } = $props();
	let currentLocale = $derived(getLocale());
	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<div class="grid min-h-screen grid-cols-12">
	<header
		class="col-span-10 col-start-2 flex items-center justify-between bg-white p-4 text-gray-800"
	>
		<!-- Left side: Add logo or site name here if needed
		<div class="flex items-center">

			<span class="font-bold text-lg"></span>
		</div>-->

		<!-- Desktop Navigation -->
		<nav class="hidden items-center space-x-6 md:flex">
			<a href="/" class="text-gray-800 transition-colors hover:text-gray-600"
				>{m['navigation.home']()}</a
			>
			<a href="/welcome" class="text-gray-800 transition-colors hover:text-gray-600"
				>{m['navigation.welcome']()}</a
			>
		</nav>

		<!-- Mobile Hamburger Button -->
		<button
			onclick={toggleMobileMenu}
			class="flex flex-col space-y-1 p-2 md:hidden"
			aria-label="Toggle mobile menu"
		>
			<span
				class="block h-0.5 w-6 bg-gray-800 transition-transform duration-300"
				class:rotate-45={mobileMenuOpen}
				class:translate-y-1.5={mobileMenuOpen}
			></span>
			<span
				class="block h-0.5 w-6 bg-gray-800 transition-opacity duration-300"
				class:opacity-0={mobileMenuOpen}
			></span>
			<span
				class="block h-0.5 w-6 bg-gray-800 transition-transform duration-300"
				class:-rotate-45={mobileMenuOpen}
				class:-translate-y-1.5={mobileMenuOpen}
			></span>
		</button>

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

	<!-- Mobile Navigation Menu -->
	{#if mobileMenuOpen}
		<div
			class="bg-opacity-50 fixed inset-0 z-50 bg-black md:hidden"
			onclick={closeMobileMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
			role="button"
			tabindex="0"
			aria-label="Close mobile menu"
		>
			<div
				class="mx-4 mt-16 rounded-lg bg-white p-4 shadow-lg"
				onclick={(e) => e.stopPropagation()}
				onkeydown={(e) => e.stopPropagation()}
				role="dialog"
				aria-label="Mobile navigation menu"
				tabindex="0"
			>
				<nav class="flex flex-col space-y-4">
					<a
						href="/"
						class="border-b border-gray-200 py-2 text-gray-800 transition-colors hover:text-gray-600"
						onclick={closeMobileMenu}
						onkeydown={(e) => {
							if (e.key === ' ') {
								e.preventDefault();
								closeMobileMenu();
								window.location.href = '/';
							}
						}}
					>
						{m['navigation.home']()}
					</a>
					<a
						href="/welcome"
						class="py-2 text-gray-800 transition-colors hover:text-gray-600"
						onclick={closeMobileMenu}
						onkeydown={(e) => {
							if (e.key === ' ') {
								e.preventDefault();
								closeMobileMenu();
								window.location.href = '/welcome';
							}
						}}
					>
						{m['navigation.welcome']()}
					</a>
				</nav>
			</div>
		</div>
	{/if}

	<main class="col-span-10 col-start-2 lg:col-span-8 lg:col-start-3">
		{@render children()}
	</main>
	<footer class="col-span-10 col-start-2 bg-white text-gray-800">
		<p></p>
	</footer>
</div>
