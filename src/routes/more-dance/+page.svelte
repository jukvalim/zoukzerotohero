<script lang="ts">
	import partner_pose_landscape from '$lib/assets/images/partner_pose_landscape.jpg';

	const isRegistrationOpen = true;
	const followerRegistrationsSoldOut = false;
	const leaderRegistrationsSoldOut = false;
	const coupleRegistrationsSoldOut = false;

	const followerUrl =
		'https://holvi.com/shop/zoukzerotohero/product/1faf4751771bbfe9b45c1791889ad6af/';
	const leaderUrl =
		'https://holvi.com/shop/zoukzerotohero/product/35eedf1ae1b2004ec05f7befe29763cc/';
	const coupleUrl =
		'https://holvi.com/shop/zoukzerotohero/product/d1050a5965656d24c9d485789d87e0a7/';
</script>

<svelte:head>
	<title>More Dance to Your Zouk Course</title>
	<meta property="og:title" content="More Dance to Your Zouk Course" />
	<meta
		property="og:description"
		content="Body movement, style and flavor for Brazilian Zouk. Six weeks, Mondays 9 November – 14 December."
	/>
	<meta property="og:url" content="https://zoukzerotohero.com/more-dance" />
	<meta property="og:image" content={partner_pose_landscape} />
</svelte:head>

<h1 class="mb-8 text-2xl font-bold md:text-4xl">More Dance to Your Zouk Course</h1>

<h2 class="mb-4 text-xl font-bold md:text-2xl">Make your dance look and feel more interesting and enjoyable</h2>

<p class="mb-4">
	The goal of this course is to help your dance look and &mdash; even more importantly &mdash; <strong>feel</strong>
	more interesting and enjoyable; more like dance, rather than executing figures. In More Dance to Your Zouk course
	we'll work on body movement, style, flavor and mentality. Along the way, you will also learn
	movements and variations that work with the course theme.
</p>

<div class="flex flex-col items-center">
	<img
		src={partner_pose_landscape}
		alt="More Dance to Your Zouk Course"
		class="mb-4 h-auto w-full rounded-lg shadow-lg md:w-3/4"
	/>
	<p class="mt-2 text-center text-sm">Jukka and Anna &mdash; course teachers</p>
</div>

<p class="mt-4 mb-2">You can join the course if:</p>

<ul class="mb-4">
	<li>you're familiar with Brazilian Zouk basics, at least basic step, lateral and simple turn.</li>
</ul>

<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Course Details</h2>

<ul>
	<li><b>Teachers:</b> Jukka and Anna</li>
	<li><b>Course dates:</b> Mondays, 9 November &ndash; 14 December</li>
	<li><b>Duration:</b> 6 weeks</li>
	<li><b>Time:</b> Mondays, 18:00-19:30</li>
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
