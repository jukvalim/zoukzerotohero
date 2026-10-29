<script lang="ts">
	import head_movements_image from '$lib/assets/images/head_movement.jpg';

	const isRegistrationOpen = true;
	const followerRegistrationsSoldOut = true;
	const leaderRegistrationsSoldOut = false;
	const coupleRegistrationsSoldOut = true;

	const followerUrl =
		'https://holvi.com/shop/zoukzerotohero/product/d494d87b2d2729fa2777bf29fb0b68e7/';
	const leaderUrl =
		'https://holvi.com/shop/zoukzerotohero/product/1f3e0f558fb54e557494fdf2d649a6d0/';
	const coupleUrl =
		'https://holvi.com/shop/zoukzerotohero/product/3a1583b98fd7522736fb65a6b67ed859/';
</script>

<svelte:head>
	<title>Head Movements II Course</title>
	<meta property="og:title" content="Head Movements II Course" />
	<meta
		property="og:description"
		content="More challenging Brazilian Zouk head movements. Six weeks, Mondays 9 November – 14 December."
	/>
	<meta property="og:url" content="https://zoukzerotohero.com/head-movements-2" />
	<meta property="og:image" content={head_movements_image} />
</svelte:head>

<h1 class="mb-8 text-2xl font-bold md:text-4xl">Head Movements II Course</h1>

<h2 class="mb-4 text-xl font-bold md:text-2xl">More challenging Brazilian Zouk head movements</h2>

<p class="mb-4">
	In this course, we'll dive into less fundamental and more challenging head movement variations.
	The course continues from where the
	<a href="/head-movements" class="underline">previous head movements course</a> stopped.
</p>

<div class="flex flex-col items-center">
	<img
		src={head_movements_image}
		alt="Head Movements II - Brazilian Zouk Course"
		class="mb-4 h-auto w-full rounded-lg shadow-lg md:w-3/4"
	/>
	<p class="mt-2 text-center text-sm">Jukka and Anna &mdash; course teachers</p>
</div>

<p class="mt-4 mb-2">You can join the course if:</p>

<ul class="mb-4">
	<li>you've done the previous head movements course, or</li>
	<li>
		you're already familiar enough with Brazilian Zouk head movements to use both head movements on
		the spot and head movements with steps in social dancing.
	</li>
</ul>

<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Course Details</h2>

<ul>
	<li><b>Teachers:</b> Jukka and Anna</li>
	<li><b>Course dates:</b> Mondays, 9 November &ndash; 14 December</li>
	<li><b>Duration:</b> 6 weeks</li>
	<li><b>Time:</b> Mondays, 19:30-21:00</li>
	<li>
		<b>Location:</b> <a href="https://www.helsinkidancecentral.com/">Helsinki Dance Central</a>,
		Sörnaisten Rantatie 33 C, 4th Floor
	</li>
	<li><b>Teaching language:</b> English</li>
	<li><b>Price:</b> 130€, couple registration 240€</li>
</ul>

{#if isRegistrationOpen}
	<h2 class="mt-8 mb-6 text-xl font-bold md:text-2xl">Sign up Now</h2>

	<div class="flex max-w-md flex-col gap-4 text-xl">
		{#if followerRegistrationsSoldOut}
			<span
				class="cursor-not-allowed rounded-md bg-gray-400 px-6 py-3 text-center font-medium whitespace-nowrap text-white"
				>Follower registration sold out</span
			>
		{:else}
			<a
				href={followerUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
				>👉 Register as a follower <span class="text-base font-normal opacity-90">(130€)</span></a
			>
		{/if}

		{#if leaderRegistrationsSoldOut}
			<span
				class="cursor-not-allowed rounded-md bg-gray-400 px-6 py-3 text-center font-medium whitespace-nowrap text-white"
				>Leader registration sold out</span
			>
		{:else}
			<a
				href={leaderUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
				>👉 Register as a leader <span class="text-base font-normal opacity-90">(130€)</span></a
			>
		{/if}

		{#if coupleRegistrationsSoldOut}
			<span
				class="cursor-not-allowed rounded-md bg-gray-400 px-6 py-3 text-center font-medium whitespace-nowrap text-white"
				>Couple registration sold out</span
			>
		{:else}
			<a
				href={coupleUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
				>👉 Couple registration <span class="text-base font-normal opacity-90">(240€)</span></a
			>
		{/if}
	</div>
{/if}
