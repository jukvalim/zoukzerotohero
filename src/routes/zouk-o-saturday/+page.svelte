<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import TryOutSaturday from '$lib/TryOutSaturday.svelte';
	import { getZoukOSaturdayFacebookUrl } from '$lib/tryOutSaturday';
	import { onMount } from 'svelte';

	let facebookUrl = $state(getZoukOSaturdayFacebookUrl());

	onMount(() => {
		facebookUrl = getZoukOSaturdayFacebookUrl();
	});
</script>

<h1 class="md:text-4xl text-2xl font-bold mb-4">{m['zouk_o_saturday.title']()}</h1>

<p class="mb-4">
	{m['zouk_o_saturday.description']()}
</p>
<TryOutSaturday>
	<p class="mb-4 font-medium">
		{m['zouk_o_saturday.this_saturday']()}
	</p>
</TryOutSaturday>
	<a class="mb-2 underline" href={facebookUrl} target="_blank" rel="noopener noreferrer">
	{m['zouk_o_saturday.fb_link']()}
</a>


