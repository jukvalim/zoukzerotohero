<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import ZoukLinks from '$lib/ZoukLinks.svelte';
</script>

<h1 class="md:text-4xl text-2xl font-bold mb-4">{m['welcome.welcome_title']()}</h1>

<p class="mb-4">
	{m['welcome.welcome_have_a_look']()}
	<a href="https://youtube.com/playlist?list=PLMobPDbOvaMSq0LnWI-Ue2r6i2ks3HoKw&si=VL8G04FbV3tLQKWd">{m['welcome.welcome_have_a_look_link']()}</a>.
</p>

<p class="mb-8">
	{m['welcome.welcome_description_1']()} <a href="https://www.facebook.com/events/4764200273801776">{m['welcome.welcome_description_2']()}</a>.
</p>

<h2 class="md:text-2xl text-xl font-bold mb-4">
	{m['welcome.beginner_courses_title']()
}</h2>

<p class="mb-4">
	{m['welcome.beginner_courses_description']()}
</p>

<ul class="space-y-2 mb-8">
	<li>
		<a href="/basics">
			{m['welcome.basics_zzh']()}
		</a>
		{m['welcome.basics_zzh_description']()}
	</li>
	<li>
		<a href="https://www.helsinkidancecentral.com/courses-events/zoukprogressivecourses">
			{m['welcome.welcome_beginners_hdc']()}
		</a>
		{m['welcome.welcome_beginners_hdc_description']()}
	</li>
	<li>
		<a href="https://fb.me/e/5ULvt1Ekh">
			{m['welcome.welcome_beginners_lds']()}
		</a>
		{m['welcome.welcome_beginners_lda_description']()}
	</li>
	<li>
		<a href="https://fb.me/e/51eF5Ji9M">
			{m['welcome.welcome_beginners_lambada']()}
		</a>
		{m['welcome.welcome_beginners_lambada_description']()}
	</li>
</ul>

<ZoukLinks />
