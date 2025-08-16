<script lang="ts">
	interface Props {
		title: string;
		open?: boolean;
		analyticsEvent?: string;
		buttonClass?: string;
		contentClass?: string;
		titleClass?: string;
	}

	let {
		title,
		open = false,
		analyticsEvent,
		buttonClass = 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200',
		contentClass = 'bg-white',
		titleClass = 'text-xl font-semibold'
	}: Props = $props();

	let isOpen = $state(open);

	function toggleAccordion() {
		isOpen = !isOpen;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleAccordion();
		}
	}
</script>

<div class="mb-4 overflow-hidden rounded-xl border border-gray-200">
	<button
		onclick={toggleAccordion}
		onkeydown={handleKeydown}
		class="flex w-full items-center justify-between {buttonClass} p-6 text-left transition-colors {analyticsEvent ? `plausible-event-name=${analyticsEvent}` : ''}"
		tabindex="0"
		aria-expanded={isOpen}
	>
		<h3 class={titleClass}>{title}</h3>
		<div
			class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
		>
			<span class="text-lg font-bold">{isOpen ? '−' : '+'}</span>
		</div>
	</button>

	{#if isOpen}
		<div class="border-t border-gray-200 {contentClass} p-6">
			<slot />
		</div>
	{/if}
</div>