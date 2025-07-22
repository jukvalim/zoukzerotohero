<script lang="ts">
	import { page } from '$app/stores';
	import { m } from '$lib/paraglide/messages.js';

	let mobileMenuOpen = $state(false);

	// Navigation items configuration
	const navigationItems = [
		{ href: '/', key: 'navigation.home' as const },
		{ href: '/welcome', key: 'navigation.welcome' as const },
		{ href: '/community-guidelines', key: 'navigation.community-guidelines' as const },
		{ href: '/who-are-we', key: 'navigation.who-are-we' as const }
	] as const;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function isActive(href: string): boolean {
		return $page.url.pathname === href;
	}

	function getActiveClasses(href: string): string {
		const active = isActive(href);
		return active
			? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
			: 'text-gray-800';
	}

	function handleMobileKeydown(e: KeyboardEvent, href: string) {
		if (e.key === ' ') {
			e.preventDefault();
			closeMobileMenu();
			window.location.href = href;
		}
	}

	function getMessage(key: string) {
		return (m as any)[key]();
	}
</script>

<!-- Desktop Navigation -->
<nav class="hidden items-center space-x-6 md:flex">
	{#each navigationItems as { href, key }}
		<a
			{href}
			class="transition-colors hover:text-gray-600 {getActiveClasses(href)}"
		>
			{getMessage(key)}
		</a>
	{/each}
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
				{#each navigationItems as { href, key }, index}
					<a
						{href}
						class="py-2 transition-colors hover:text-gray-600 {index === 0 ? 'border-b border-gray-200' : ''}"
						class:text-gray-800={!isActive(href)}
						class:text-blue-600={isActive(href)}
						class:font-semibold={isActive(href)}
						onclick={closeMobileMenu}
						onkeydown={(e) => handleMobileKeydown(e, href)}
					>
						{getMessage(key)}
					</a>
				{/each}
			</nav>
		</div>
	</div>
{/if}