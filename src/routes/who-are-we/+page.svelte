<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import jukka from '$lib/assets/images/jukka.jpg';
	import kristina from '$lib/assets/images/kristina.jpg';
	import anna from '$lib/assets/images/anna.jpg';
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

<h1 class="mb-4 md:text-4xl text-2xl font-bold">{m['who_are_we.who_are_we_title']()}</h1>
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
				<img src={jukka} alt="Jukka" class="mr-4 mb-4 h-48 w-48 rounded-full object-cover" />
				<div class="flex items-center gap-2">
					<div
						class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-left transition-colors hover:bg-gray-50 md:hidden"
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
							class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
						>
							<span class="text-lg font-bold">{jukkaExpanded ? '−' : '+'}</span>
						</div>
					</div>
					<!-- Desktop name (not clickable) -->
					<h3 class="hidden text-center text-xl font-semibold md:block">Jukka Välimaa</h3>
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
		<div class="mb-2 flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center">
				<img src={kristina} alt="Kristina" class="mr-4 mb-4 h-48 w-48 rounded-full object-cover" />
				<div class="flex items-center gap-2">
					<div
						class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-left transition-colors hover:bg-gray-50 md:hidden"
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
							class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
						>
							<span class="text-lg font-bold">{kristinaExpanded ? '−' : '+'}</span>
						</div>
					</div>
					<!-- Desktop name (not clickable) -->
					<h3 class="hidden text-center text-xl font-semibold md:block">Kristina Välimaa</h3>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<!-- Content (collapsible on mobile, always visible on desktop) -->
			{#if kristinaExpanded}
				<div class="leading-relaxed text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</div>
			{/if}
		</div>
	</div>

	<div class="flex flex-col items-start gap-1 md:flex-row">
		<div class="mb-2 flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center">
				<img src={anna} alt="Anna" class="mr-4 mb-4 h-48 w-48 rounded-full object-cover" />
				<div class="flex items-center gap-2">
					<div
						class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-left transition-colors hover:bg-gray-50 md:hidden"
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
						<h3 class="text-center text-xl font-semibold">Anna Zahrmann</h3>
						<!-- Mobile expander button -->
						<div
							class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
						>
							<span class="text-lg font-bold">{annaExpanded ? '−' : '+'}</span>
						</div>
					</div>
					<!-- Desktop name (not clickable) -->
					<h3 class="hidden text-center text-xl font-semibold md:block">Anna Zahrmann</h3>
				</div>
			</div>
		</div>
		<div class="flex-1">
			<!-- Content (collapsible on mobile, always visible on desktop) -->
			{#if annaExpanded}
				<div class="leading-relaxed text-gray-700">
					<div class="leading-relaxed text-gray-700">
						<p class="mb-2">
							{m['who_are_we.anna_1']()}
						</p>
						<p class="mb-2">
							{m['who_are_we.anna_2']()}
						</p>
						<p class="">
							{m['who_are_we.anna_3']()}
							<a href="mailto:anna.zahrmann@gmail.com"> anna.zahrmann@gmail.com &#9993; </a>
						</p>
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
