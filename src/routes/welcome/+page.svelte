<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ZoukLinks from '$lib/ZoukLinks.svelte';
</script>

<h1 class="text-4xl font-bold mb-4">{m['welcome.welcome_title']()}</h1>
<p class="mb-8">
	{m['welcome.welcome_description_1']()} <a href="https://www.facebook.com/events/1949014439171820/">{m['welcome.welcome_description_2']()}</a>.
</p>

<ZoukLinks />
