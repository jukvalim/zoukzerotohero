<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ZoukLinks from '$lib/ZoukLinks.svelte';
	import beginners_course_image from '$lib/assets/images/beginners_course.jpeg';
</script>

<h1 class="mb-4 text-2xl font-bold md:text-4xl">Zouk Zero to Hero</h1>
<p class="mb-8">{m.zouk_zero_to_hero_description()}</p>

<div class="flex flex-col mb-8">
	<div>
		<p>
			{m.beginners_course_description()}
			<a href="/beginners" class="px-6 py-3 text-center font-medium whitespace-nowrap underline">
				{m.beginners_course_link_text()}
			</a>
		</p>
	</div>
	<a href="/beginners">
		<img
			src={beginners_course_image}
			alt="Beginners course"
			class="w-full rounded-lg shadow-lg md:w-1/2"
		/>
	</a>
</div>

<ZoukLinks />
