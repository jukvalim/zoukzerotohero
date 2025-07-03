<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';

	const links = [
		{
			href: 'https://www.helsinkidancecentral.com/community-guidelines',
			title: m['links.guidelines']()
		},
		{
			href: 'https://calendar.google.com/calendar/u/0?cid=dWp1bGo4NzgyczBkcm1xYzlxcXI3b3E3MDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ',
			title: m['links.calendar']()
		},
		{
			href: 'https://www.facebook.com/groups/159001944476740',
			title: m['links.facebook_group']()
		},
		{
			href: 'http://facebook.com/profile.php?id=61551733333069',
			title: m['links.zerotohero_page']()
		},
		{
			href: 'https://www.helsinkidancecentral.com',
			title: m['links.hdc']()
		},
		{
			href: 'https://www.facebook.com/lambadahelsinki',
			title: m['links.lambada'](),
			extraInfo: m['links.lambada_extra_info']()
		},
		{
			href: 'https://latiffbraziliandanceschool.wordpress.com',
			title: 'Latiff Brazilian Dance School'
		},
		{
			href: 'https://www.instagram.com/helsinki_zouk/',
			title: m['links.helsinki_zouk_instagram']()
		}
	];
</script>

<h2 class="mb-2 text-2xl font-bold">{m['links_title']()}</h2>

<ul class="space-y-2">
	{#each links as link}
		<li>
			<a href={link.href}>{link.title}</a>{#if link.extraInfo}&nbsp;<span
					class="text-sm text-gray-500">({link.extraInfo})</span
				>{/if}
		</li>
	{/each}
</ul>
