<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import jukka from '$lib/assets/images/jukka.jpg';
	import kristina from '$lib/assets/images/kristina.jpg';
	//import anna from '$lib/assets/images/anna.jpg';
	import { browser } from '$app/environment';

	let jukkaExpanded = $state(browser && window.innerWidth >= 768);
	let kristinaExpanded = $state(browser && window.innerWidth >= 768);
	let annaExpanded = $state(browser && window.innerWidth >= 768);

	// Update expanded state when window resizes
	if (browser) {
		window.addEventListener('resize', () => {
			const isDesktop = window.innerWidth >= 768;
			jukkaExpanded = isDesktop || jukkaExpanded;
			kristinaExpanded = isDesktop || kristinaExpanded;
			annaExpanded = isDesktop || annaExpanded;
		});
	}
</script>

<h1 class="mb-4 text-4xl font-bold">{m['who_are_we.who_are_we_title']()}</h1>
<p class="mb-2">
	{m['who_are_we.who_are_we_description_1']()}
</p>

<p class="mb-8">
	{m['who_are_we.who_are_we_description_2']()}
	<a href="mailto:jukka@zoukzerotohero.fi"> jukka@zoukzerotohero.fi &#9993; </a>
</p>

<section class="space-y-12">
	<div class="flex flex-col items-start gap-1 md:flex-row">
		<div class="flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center">
				<img src={jukka} alt="Jukka" class="mb-4 mr-4 h-48 w-48 rounded-full object-cover" />
				<div class="flex items-center gap-2">
					<div
						class="md:hidden flex items-center gap-2 text-left hover:bg-gray-50 rounded px-2 py-1 transition-colors cursor-pointer"
						onclick={() => {
							jukkaExpanded = !jukkaExpanded;
						}}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								jukkaExpanded = !jukkaExpanded;
							}
						}}
						tabindex="0"
						role="button"
					>
						<h3 class="text-center text-xl font-semibold">Jukka Välimaa</h3>
						<!-- Mobile expander button -->
						<div
							class="w-8 h-8 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors flex items-center justify-center"
						>
							<span class="text-lg font-bold">{jukkaExpanded ? '−' : '+'}</span>
						</div>
					</div>
					<!-- Desktop name (not clickable) -->
					<h3 class="hidden md:block text-center text-xl font-semibold">Jukka Välimaa</h3>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<!-- Content (collapsible on mobile, always visible on desktop) -->
			{#if jukkaExpanded}
				<div class="leading-relaxed text-gray-700">
					<p class="mb-2">
						{m['who_are_we.jukka_1']()}
					</p>
					<p class="mb-2">
						{m['who_are_we.jukka_2']()}
					</p>
					<p class="">
						{m['who_are_we.jukka_3']()}
						<a href="mailto:jukka@zoukzerotohero.fi"> jukka@zoukzerotohero.fi &#9993; </a>
					</p>
				</div>
			{/if}
		</div>
	</div>

	<div class="flex flex-col items-start gap-1 md:flex-row">
		<div class="flex flex-col items-center md:items-start mb-2">
			<div class="flex flex-col items-center">
				<img src={kristina} alt="Kristina" class="mb-4 mr-4 h-48 w-48 rounded-full object-cover" />
				<div class="flex items-center gap-2">
					<div
						class="md:hidden flex items-center gap-2 text-left hover:bg-gray-50 rounded px-2 py-1 transition-colors cursor-pointer"
						onclick={() => {
							kristinaExpanded = !kristinaExpanded;
						}}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								kristinaExpanded = !kristinaExpanded;
							}
						}}
						tabindex="0"
						role="button"
					>
						<h3 class="text-center text-xl font-semibold">Kristina Välimaa</h3>
						<!-- Mobile expander button -->
						<div
							class="w-8 h-8 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors flex items-center justify-center"

						>
							<span class="text-lg font-bold">{kristinaExpanded ? '−' : '+'}</span>
						</div>
					</div>
					<!-- Desktop name (not clickable) -->
					<h3 class="hidden md:block text-center text-xl font-semibold">Kristina Välimaa</h3>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<!-- Content (collapsible on mobile, always visible on desktop) -->
			{#if kristinaExpanded}
				<div class="leading-relaxed text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</div>
			{/if}
		</div>
	</div>

	<div class="flex flex-col items-start gap-1 md:flex-row">
		<div class="flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center md:items-start">
				<div class="flex items-center gap-2">
					<div
						class="md:hidden flex items-center gap-2 text-left hover:bg-gray-50 rounded px-2 py-1 transition-colors cursor-pointer"
						onclick={() => {
							annaExpanded = !annaExpanded;
						}}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								annaExpanded = !annaExpanded;
							}
						}}
						tabindex="0"
						role="button"
					>
						<h3 class="text-center text-xl font-semibold md:text-left">Anna Zharkova</h3>
						<!-- Mobile expander button -->
						<div
							class="w-8 h-8 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors flex items-center justify-center"
						>
							<span class="text-lg font-bold">{annaExpanded ? '−' : '+'}</span>
						</div>
					</div>
					<!-- Desktop name (not clickable) -->
					<h3 class="hidden md:block text-center text-xl font-semibold md:text-left">Anna Zharkova</h3>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<!-- Content (collapsible on mobile, always visible on desktop) -->
			{#if annaExpanded}
				<div class="leading-relaxed text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</div>
			{/if}
		</div>
	</div>
</section>
