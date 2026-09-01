<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ZoukLinks from '$lib/ZoukLinks.svelte';
	import TryOutSaturday from '$lib/TryOutSaturday.svelte';
	import { TRY_OUT_FACEBOOK_URL } from '$lib/tryOutSaturday';
	import beginners_course_image from '$lib/assets/images/beginners_course.jpeg';
</script>

<div class="flex items-center mb-4">
	<img src="/favicon.png" alt="Zouk Zero to Hero logo" class="h-12 mr-4" />
	<h1 class="text-2xl font-bold md:text-4xl">Zouk Zero to Hero</h1>
</div>
<p class="mb-4">{m.zouk_zero_to_hero_description()}</p>

<a href="https://youtube.com/playlist?list=PLMobPDbOvaMSq0LnWI-Ue2r6i2ks3HoKw&si=VL8G04FbV3tLQKWd" class="underline">
	{m.brazilian_zouk_youtube_playlist_link_text()}
</a>

<TryOutSaturday>
	<div class="mt-8 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-4">
		<p class="mb-2 text-lg font-bold text-orange-800">{m.try_zouk_saturday_title()}</p>
		<p class="mb-3 text-orange-700">{m.try_zouk_saturday_description()}</p>
		<a
			href={TRY_OUT_FACEBOOK_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="underline font-medium text-orange-800"
		>
			{m.try_zouk_saturday_link()}
		</a>
	</div>
</TryOutSaturday>

<hr class="my-8" />

<h2 class="mb-4 text-xl font-bold md:text-2xl">{m.beginners_course_title()}</h2>
<div class="flex flex-col">

		<p class="mb-2">
			{m.beginners_course_description()}
			<a href="/basics" class="underline">
				{m.beginners_course_link_text()}
			</a>
		</p>
	<a href="/basics">
		<img
			src={beginners_course_image}
			alt="Basics course"
			class="w-full rounded-lg shadow-lg md:w-1/2"
		/>
	</a>
</div>

<hr class="my-8" />

<ZoukLinks />
