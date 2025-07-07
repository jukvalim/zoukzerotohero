<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import jukka from '$lib/assets/images/jukka.jpg';
	import kristina from '$lib/assets/images/kristina.jpg';
</script>

<h1 class="text-4xl font-bold mb-4">{m['who_are_we.who_are_we_title']()}</h1>
<p class="mb-8">
	{m['who_are_we.who_are_we_description']()}
</p>

<section class="space-y-12">
	<div class="flex flex-col md:flex-row items-start gap-8">
		<div class="flex flex-col items-center md:items-start">
			<img src={jukka} alt="Jukka" class="w-48 h-48 rounded-full mb-4 object-cover" />
			<h3 class="text-xl font-semibold text-center md:text-left">Jukka Välimaa</h3>
		</div>
		<div class="flex-1">
			<p class="text-gray-700 leading-relaxed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
		</div>
	</div>

	<div class="flex flex-col md:flex-row items-start gap-8">
		<div class="flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center md:items-start">
				<img src={kristina} alt="Kristina" class="w-48 h-48 rounded-full mb-4 object-cover" />
				<h3 class="text-xl font-semibold text-center md:text-left">Kristina Välimaa</h3>
			</div>
		</div>
		<div class="flex-1">
			<p class="text-gray-700 leading-relaxed">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
		</div>
	</div>
</section>


