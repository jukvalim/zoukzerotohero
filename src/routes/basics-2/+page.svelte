<script lang="ts">
	import partner_pose_landscape from '$lib/assets/images/partner_pose_landscape.jpg';
	import { Accordion } from '$lib';

	// Early bird pricing configuration
	const earlyBirdDeadline = 'Wednesday, October 1st';
	const isEarlyBirdActive = false; // Set to false when early bird period ends
	const earlyBirdDiscount = 30; // €30 off

	// Pricing structure
	const pricing = {
		individual: {
			regular: 220,
			earlyBird: 220 - earlyBirdDiscount
		},
		couple: {
			regular: 400,
			earlyBird: 400 - earlyBirdDiscount
		}
	};
</script>

<svelte:head>
	<title>Brazilian Zouk Basics Course II</title>
	<meta property="og:title" content="Brazilian Zouk Basics Course II" />
	<meta property="og:description" content="Brazilian Zouk Basics II, six weeks course. Monday evenings starting 13.10." />
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
	<li>6 structured weekly classes (1.5 hours each, Mondays)</li>
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
	<li><b>Start date:</b> Monday, September 1st</li>
	<li><b>Duration:</b> 6 weeks</li>
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

<div class="flex max-w-md flex-col gap-4 text-xl mb-8">
	<a
		href="https://holvi.com/shop/zoukzerotohero/product/967cf98db6ce73ddb81798d07254aec1/"
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-600 cursor-pointer"
		><span >👉 Register as a follower</span>
		{#if isEarlyBirdActive}
			<div class="text-sm font-normal mt-1">
				€{pricing.individual.earlyBird} <span class="line-through opacity-75">€{pricing.individual.regular}</span>
			</div>
		{/if}
	</a>

	<a
		href="https://holvi.com/shop/zoukzerotohero/product/a0279b5c4a696f494cbffd1526c45c8b/"
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-600 cursor-pointer"
		><span >👉 Register as a leader</span>
		{#if isEarlyBirdActive}
			<div class="text-sm font-normal mt-1">
				€{pricing.individual.earlyBird} <span class="line-through opacity-75">€{pricing.individual.regular}</span>
			</div>
		{/if}
	</a>

	<a
		href="https://holvi.com/shop/zoukzerotohero/product/a422913cb4086d036f0f41a3f656e029/"
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-600 cursor-pointer"
		><span >👉 Couple registration</span>
		{#if isEarlyBirdActive}
			<div class="text-sm font-normal mt-1">
				€{pricing.couple.earlyBird} <span class="line-through opacity-75">€{pricing.couple.regular}</span>
			</div>
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



<hr class="my-8" />

<h2 class="mb-4 text-xl font-bold md:text-2xl">
	🤝 Spread the Zouk &dash; Referral Program & Discounts
</h2>

<p>
	Would you like to help us grow the Zouk community? Invite your friends to our next <a href="/basics"
		>From Zero to Zouk Basics course</a
	> and you'll get a 20€ discount for the basics II course.
</p>

<ul>
	<li>Ask us for your personal <b>discount code</b> to share</li>
	<li>
		For each person who signs up using your code, you get:
		<ul>
			<li>A <b>20€ discount</b> on basics II course</li>
			<li>
				Alternatively, a <b>15€ discount</b> on a private class with Jukka or Anna (1h), to be taken
				before end of the year
			</li>
		</ul>
	</li>
	<li>
		The person who signed up for From Zero to Zouk Basics course gets:
		<ul>
			<li>A <b>30€ discount</b> on the course price</li>
			<li>They get to learn Brazilian Zouk!</li>
		</ul>
	</li>
</ul>
