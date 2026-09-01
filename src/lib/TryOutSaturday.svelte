<script lang="ts">
	import { onMount } from 'svelte';
	import { isTryOutSaturdayVisible } from './tryOutSaturday';

	let { children }: { children: import('svelte').Snippet } = $props();
	let visible = $state(isTryOutSaturdayVisible());

	onMount(() => {
		visible = isTryOutSaturdayVisible();
	});
</script>

{#if visible}
	{@render children()}
{/if}
