<script lang="ts">
	import partner_pose_landscape from '$lib/assets/images/partner_pose_landscape.jpg';
	import { Accordion } from '$lib';

	const followerUrl =
		'https://holvi.com/shop/zoukzerotohero/product/041564b8333fecc84de61d1f4c67ee70/';
	const leaderUrl =
		'https://holvi.com/shop/zoukzerotohero/product/fe5829dcce0e53c9000c4f4a2334fe00/';
	const coupleUrl =
		'https://holvi.com/shop/zoukzerotohero/product/a7a08a29ff3c65d1643bc1c8016f4e02/';

	// Early bird pricing configuration
	const earlyBirdDeadline = 'Saturday, February 15th';
	const isEarlyBirdActive = false; // Set to false when early bird period ends
	const earlyBirdDiscount = 30; // €30 off

	// Pricing structure (5/6 of former 6-week prices (220 / 400), rounded down to nearest €10)
	const pricing = {
		individual: {
			regular: 180,
			earlyBird: 180 - earlyBirdDiscount
		},
		couple: {
			regular: 330,
			earlyBird: 330 - earlyBirdDiscount
		}
	};
</script>

<svelte:head>
	<title>Brazilian Zouk Basics Course II</title>
	<meta property="og:title" content="Brazilian Zouk Basics Course II" />
	<meta property="og:description" content="Brazilian Zouk Basics II, five weeks course. Monday evenings, 20 April – 18 May." />
	<meta property="og:url" content="https://zoukzerotohero.com/basics-2" />
	<meta property="og:image" content={partner_pose_landscape} />
</svelte:head>

<h1 class="mb-8 text-2xl font-bold md:text-4xl">Brazilian Zouk Basics Course II</h1>

<h2 class="mb-4 text-xl font-bold md:text-2xl">Expand your knowledge of Brazilian Zouk Basics and foundations</h2>

<p class="mb-4">
	After completing the basics I (From Zero to Zouk) course, you will have a solid foundation of the basics of Brazilian Zouk.
	This course will help you expand your knowledge and foundations with new variations and techniques.
</p>

<div class="flex flex-col items-center">
	<img
		src={partner_pose_landscape}
		alt="Brazilian Zouk Basics Course II"
		class="mb-4 h-auto w-full rounded-lg shadow-lg md:w-3/4"
	/>
	<p class="mt-2 text-center text-sm">Jukka and Anna &mdash; course teachers</p>
</div>


<h2 class="mt-8 text-xl font-bold md:text-2xl mb-4">What You'll Get</h2>

<ul>
	<li>5 structured weekly classes (1.5 hours each, Mondays)</li>
	<li >
		Recap & practice videos
	</li>
	<li >
		Bonus practice materials
	</li>
	<li>Personalized feedback</li>
</ul>

<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Course Details</h2>

<ul>
	<li><b>Teachers:</b> Jukka & Anna</li>
	<li><b>Course dates:</b> Mondays, 20 April &ndash; 18 May</li>
	<li><b>Duration:</b> 5 weeks</li>
	<li><b>Time:</b> Mondays, 18:00-19:30</li>
	<li>
		<b>Location:</b> <a href="https://www.helsinkidancecentral.com/">Helsinki Dance Central</a>,
		Sörnaisten Rantatie 33 C, 4th Floor
	</li>
	<li><b>Teaching language:</b> English</li>
	<li>
		<b>Price:</b>
		{#if isEarlyBirdActive}
			<span class="text-green-600 font-semibold">€{pricing.individual.earlyBird}</span>
			<span class="line-through text-gray-500 ml-1">€{pricing.individual.regular}</span>
			<span class="text-sm text-green-600 ml-2">(Early Bird - Save €{earlyBirdDiscount}!)</span>
			, couple registration
			<span class="text-green-600 font-semibold">€{pricing.couple.earlyBird}</span>
			<span class="line-through text-gray-500 ml-1">€{pricing.couple.regular}</span>
		{:else}
			€{pricing.individual.regular}, couple registration €{pricing.couple.regular}
		{/if}
	</li>
</ul>

{#if isEarlyBirdActive}
	<div class="mt-8 mb-6 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 text-center">
		<p class="text-lg font-semibold text-orange-800">
			🎉 Early Bird Pricing Active!
		</p>
		<p class="text-sm text-orange-700">
			Save €{earlyBirdDiscount} by registering before {earlyBirdDeadline}
		</p>
	</div>
{/if}

<h2 class="mt-8 mb-6 text-xl font-bold md:text-2xl">Sign up Now</h2>

<p class="mb-4 text-gray-700">
	Register via our
	<a
		href="https://holvi.com/shop/zoukzerotohero/"
		target="_blank"
		rel="noopener noreferrer"
		class="underline">Holvi shop</a
	>.
</p>

<div class="flex max-w-md flex-col gap-4 text-xl mb-8">
	<a
		href={followerUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
		>👉 Register as a follower
		{#if isEarlyBirdActive}
			<span class="text-base font-normal opacity-90">
				(€{pricing.individual.earlyBird}
				<span class="line-through opacity-75">€{pricing.individual.regular}</span>)
			</span>
		{:else}
			<span class="text-base font-normal opacity-90">(€{pricing.individual.regular})</span>
		{/if}
	</a>

	<a
		href={leaderUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
		>👉 Register as a leader
		{#if isEarlyBirdActive}
			<span class="text-base font-normal opacity-90">
				(€{pricing.individual.earlyBird}
				<span class="line-through opacity-75">€{pricing.individual.regular}</span>)
			</span>
		{:else}
			<span class="text-base font-normal opacity-90">(€{pricing.individual.regular})</span>
		{/if}
	</a>

	<a
		href={coupleUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
		>👉 Couple registration
		{#if isEarlyBirdActive}
			<span class="text-base font-normal opacity-90">
				(€{pricing.couple.earlyBird}
				<span class="line-through opacity-75">€{pricing.couple.regular}</span>)
			</span>
		{:else}
			<span class="text-base font-normal opacity-90">(€{pricing.couple.regular})</span>
		{/if}
	</a>
</div>

<!-- FAQ Accordion -->
<Accordion title="Do I need to take Basics I first?" analyticsEvent="BasicsIPrerequisiteAccordionOpen">
	<p class="mb-4 text-lg">
		It's also possible to take this course without doing Basics I (From Zero to Zouk) first, if you have previous experience with Zouk from elsewhere.
	</p>
	<p class="text-lg">
		If you're struggling with decision on which to take, for most people taking Basics I first is a good idea &mdash;
		dance is build on foundations, and the foundations in Basics I are the most important.
	</p>
</Accordion>

<Accordion title="What about after Basics II?" analyticsEvent="AfterBasicsIIAccordionOpen">
	<p class="mb-4 text-lg">
		We're not currently planning any courses progressing from Basics II.
	</p>
	<p class="text-lg">
		However, you can continue your learning journey with <a href="https://www.helsinkidancecentral.com/courses-events/zoukprogressivecourses" target="_blank" rel="noopener" class="underline">Helsinki Dance Central's courses</a>.
		Our basics courses have been designed to be compatible with HDC fundamentals course, so you can continue with HDC improver's course.
	</p>
</Accordion>

