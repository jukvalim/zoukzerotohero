<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const { imgSrc, imgAlt, name, hasMarginBottom = false, alwaysExpanded = false } = $props<{
		imgSrc: string;
		imgAlt: string;
		name: string;
		hasMarginBottom?: boolean;
		alwaysExpanded?: boolean;
	}>();

	let expanded = $state(browser && window.innerWidth >= 768);

	onMount(() => {
		if (!browser) return;
		const handleResize = () => {
			const isDesktop = window.innerWidth >= 768;
			expanded = isDesktop || expanded;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<div class="flex flex-col items-start gap-1 md:flex-row">
	<div class={hasMarginBottom ? 'mb-2 flex flex-col items-center md:items-start' : 'flex flex-col items-center md:items-start'}>
		<div class="flex flex-col items-center">
			<img src={imgSrc} alt={imgAlt} class="mr-4 mb-4 h-48 w-48 rounded-full object-cover" />
			<div class="flex items-center gap-2">
				{#if alwaysExpanded}
					<h3 class="text-center text-xl font-semibold">{name}</h3>
				{:else}
					<div
						class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-left transition-colors hover:bg-gray-50 md:hidden"
						onclick={() => {
							expanded = !expanded;
						}}
						onkeydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								expanded = !expanded;
							}
						}}
						tabindex="0"
						role="button"
					>
						<h3 class="text-center text-xl font-semibold">{name}</h3>
						<div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300">
							<span class="text-lg font-bold">{expanded ? '−' : '+'}</span>
						</div>
					</div>
					<h3 class="hidden text-center text-xl font-semibold md:block">{name}</h3>
				{/if}
			</div>
		</div>
	</div>
	<div class="flex-1">
		{#if expanded || alwaysExpanded}
			<div class="leading-relaxed text-gray-700">
				<slot />
			</div>
		{/if}
	</div>
</div>