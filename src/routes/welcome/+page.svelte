<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
</script>

<h1 class="text-4xl font-bold mb-4">{m['welcome.welcome_title']()}</h1>
<p class="mb-8">
	{m['welcome.welcome_description_1']()} <a href="https://www.facebook.com/events/1949014439171820/">{m['welcome.welcome_description_2']()}</a>.
</p>

<h2 class="text-2xl font-bold mb-2">{m['welcome.links_title']()}</h2>
<ul class="space-y-2">
	<li>
		<a href="https://calendar.google.com/calendar/u/0?cid=dWp1bGo4NzgyczBkcm1xYzlxcXI3b3E3MDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">{m['welcome.links.calendar']()}</a>
	</li>
  <li>
		<a href="https://www.facebook.com/groups/159001944476740">{m['welcome.links.facebook_group']()}</a>
	</li>
  <li>
		<a href="https://www.helsinkidancecentral.com/community-guidelines">{m['welcome.links.guidelines']()}</a>
  </li>
  <li>
		<a href="http://facebook.com/profile.php?id=61551733333069">{m['welcome.links.zerotohero_page']()}</a>
	</li>
  <li>
		<a href="https://www.helsinkidancecentral.com">{m['welcome.links.hdc']()}</a>
  </li>
  <li>
		<a href="https://www.facebook.com/lambadahelsinki">{m['welcome.links.lambada']()}</a> ({m['welcome.links.lambada_extra_info']()})
  </li>
  <li>
		<a href="https://www.instagram.com/helsinki_zouk/">{m['welcome.links.helsinki_zouk_instagram']()}</a>
  </li>

</ul>
