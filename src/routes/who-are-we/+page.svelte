<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import jukka from '$lib/assets/images/jukka.jpg';
	import kristina from '$lib/assets/images/kristina.jpg';
	//import anna from '$lib/assets/images/anna.jpg';
</script>

<h1 class="mb-4 text-4xl font-bold">{m['who_are_we.who_are_we_title']()}</h1>
<p class="mb-8">
	{m['who_are_we.who_are_we_description']()}
</p>

<section class="space-y-12">
	<div class="flex flex-col items-start gap-8 md:flex-row">
		<div class="flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center">
				<img src={jukka} alt="Jukka" class="mb-4 h-48 w-48 rounded-full object-cover" />
				<h3 class="text-center text-xl font-semibold">Jukka Välimaa</h3>
			</div>
		</div>
		<div class="flex-1 leading-relaxed text-gray-700">
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
	</div>

	<div class="flex flex-col items-start gap-8 md:flex-row">
		<div class="flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center">
				<img src={kristina} alt="Kristina" class="mb-4 h-48 w-48 rounded-full object-cover" />
				<h3 class="text-center text-xl font-semibold">Kristina Välimaa</h3>
			</div>
		</div>
		<div class="flex-1">
			<p class="leading-relaxed text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
		</div>
	</div>

	<div class="flex flex-col items-start gap-8 md:flex-row">
		<div class="flex flex-col items-center md:items-start">
			<div class="flex flex-col items-center md:items-start">
				<h3 class="text-center text-xl font-semibold md:text-left">Anna Zharkova</h3>
			</div>
		</div>
		<div class="flex-1">
			<p class="leading-relaxed text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
		</div>
	</div>
</section>
