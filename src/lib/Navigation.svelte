<script lang="ts">
	import { page } from '$app/stores';
	import { m } from '$lib/paraglide/messages.js';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<!-- Desktop Navigation -->
<nav class="hidden items-center space-x-6 md:flex">
	<a
		href="/"
		class="transition-colors hover:text-gray-600"
		class:text-gray-800={$page.url.pathname !== '/'}
		class:text-blue-600={$page.url.pathname === '/'}
		class:font-semibold={$page.url.pathname === '/'}
		class:border-b-2={$page.url.pathname === '/'}
		class:border-blue-600={$page.url.pathname === '/'}
		class:pb-1={$page.url.pathname === '/'}
	>
		{m['navigation.home']()}
	</a>
	<a
		href="/welcome"
		class="transition-colors hover:text-gray-600"
		class:text-gray-800={$page.url.pathname !== '/welcome'}
		class:text-blue-600={$page.url.pathname === '/welcome'}
		class:font-semibold={$page.url.pathname === '/welcome'}
		class:border-b-2={$page.url.pathname === '/welcome'}
		class:border-blue-600={$page.url.pathname === '/welcome'}
		class:pb-1={$page.url.pathname === '/welcome'}
	>
		{m['navigation.welcome']()}
	</a>
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
					class="border-b border-gray-200 py-2 transition-colors hover:text-gray-600"
					class:text-gray-800={$page.url.pathname !== '/'}
					class:text-blue-600={$page.url.pathname === '/'}
					class:font-semibold={$page.url.pathname === '/'}
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
					class="py-2 transition-colors hover:text-gray-600"
					class:text-gray-800={$page.url.pathname !== '/welcome'}
					class:text-blue-600={$page.url.pathname === '/welcome'}
					class:font-semibold={$page.url.pathname === '/welcome'}
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