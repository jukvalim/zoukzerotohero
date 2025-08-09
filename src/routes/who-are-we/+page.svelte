<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import jukka from '$lib/assets/images/jukka.jpg';
	import kristina from '$lib/assets/images/kristina.jpg';
	import anna from '$lib/assets/images/anna.jpg';
	import Introduction from '$lib/Introduction.svelte';
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
	<Introduction imgSrc={jukka} imgAlt="Jukka" name="Jukka Välimaa">
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
	</Introduction>

	<Introduction imgSrc={kristina} imgAlt="Kristina" name="Kristina Välimaa" hasMarginBottom>
		<p class="mb-2">
			{m['who_are_we.kristina_1']()}
		</p>
		<p class="mb-2">
			{m['who_are_we.kristina_2']()}
		</p>
		<p class="">
			{m['who_are_we.kristina_3']()}
			<a href="mailto:kristina.elanor@gmail.com"> kristina.elanor@gmail.com &#9993; </a>
		</p>
	</Introduction>

	<Introduction imgSrc={anna} imgAlt="Anna" name="Anna Zahrmann" hasMarginBottom>
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
	</Introduction>
</section>
