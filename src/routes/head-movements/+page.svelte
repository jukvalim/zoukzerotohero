<script lang="ts">
	import head_movements_image from '$lib/assets/images/head_movement.jpg';

	const followerUrl =
		'https://holvi.com/shop/zoukzerotohero/product/9a750b505162b56555200de4cd1b03f5/';
	const leaderUrl =
		'https://holvi.com/shop/zoukzerotohero/product/3c25a9469280f0555f8189f0f4a92141/';
	const coupleUrl =
		'https://holvi.com/shop/zoukzerotohero/product/3d9675d1d9325c58904d4823ea8d07af/';
</script>

<svelte:head>
	<title>Head Movements Course</title>
	<meta property="og:title" content="Head Movements Course" />
	<meta property="og:description" content="Learn Brazilian Zouk Head Movements, five weeks course. Monday evenings, 20 April – 18 May." />
	<meta property="og:url" content="https://zoukzerotohero.com/head-movements" />
	<meta property="og:image" content={head_movements_image} />
</svelte:head>

<h1 class="mb-8 text-2xl font-bold md:text-4xl">Head Movements Course</h1>

<h2 class="mb-4 text-xl font-bold md:text-2xl">Learn Brazilian Zouk Head Movements</h2>

<p class="mb-4">
	Fluid and beautiful head movements are one of the most distinctive characteristics of Brazilian
	Zouk. Would you like to learn them?
</p>

<div class="flex flex-col items-center">
	<img
		src={head_movements_image}
		alt="Head Movements - Brazilian Zouk Course"
		class="mb-4 h-auto w-full rounded-lg shadow-lg md:w-3/4"
	/>
	<p class="mt-2 text-center text-sm">Jukka and Anna &mdash; course teachers</p>
</div>

<p class="mt-4 mb-2">
	In this course, we'll start from the very basics of head movements, and progress with different
	types of head movements we use in Zouk:
</p>

<ul class="mb-2">
	<li>Vertical head movements</li>
	<li>Horizontal head movements (Frango Assado/Rotisserie)</li>
	<li>Head movements with steps</li>
	<li>Tilted turns</li>
</ul>

<p class="mb-4">
	<b>This course is not for beginners.</b> As a prerequisite, you should be able to do the following
	movements: Basic step, Viradinha, Lateral, Preparation (aka Lunge) and Simple Turn.
</p>

<h2 class="mt-8 text-xl font-bold md:text-2xl">What You'll Get</h2>

<ul>
	<li>5 structured weekly classes (1.5 hours each, Mondays)</li>
	<li>Recap videos after each class</li>
	<li>Personalized feedback</li>
</ul>

<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Course Details</h2>

<ul>
	<li><b>Teachers:</b> Jukka, Anna as assistant teacher</li>
	<li><b>Course dates:</b> Mondays, 20 April &ndash; 18 May</li>
	<li><b>Duration:</b> 5 weeks</li>
	<li><b>Time:</b> Mondays, 19:30-21:00</li>
	<li>
		<b>Location:</b> <a href="https://www.helsinkidancecentral.com/">Helsinki Dance Central</a>,
		Sörnaisten Rantatie 33 C, 4th Floor
	</li>
	<li><b>Teaching language:</b> English</li>
	<li><b>Price:</b> 110€, couple registration 200€</li>
</ul>

<h2 class="mt-8 mb-6 text-xl font-bold md:text-2xl">Sign up Now</h2>

<div class="flex max-w-md flex-col gap-4 text-xl">
	<a
		href={followerUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-purple-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-purple-700"
		>👉 Register as a follower <span class="text-base font-normal opacity-90">(110€)</span></a>

	<a
		href={leaderUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-blue-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-700"
		>👉 Register as a leader <span class="text-base font-normal opacity-90">(110€)</span></a>

	<a
		href={coupleUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-md bg-green-600 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-green-700"
		>👉 Couple registration <span class="text-base font-normal opacity-90">(200€)</span></a>
</div>

<!--
<hr class="my-8" />

<h2 class="mb-4 text-xl font-bold md:text-2xl">
	🤝 Spread the Zouk &dash; Referral Program & Discounts
</h2>

<p>
	Would you like to help us grow the Zouk community? Invite your friends to our <a href="/beginners"
		>Zero to Zouk beginner course</a
	> and you'll get a 20€ discount for the head movements course.
</p>

<ul>
	<li>Ask us for your personal <b>discount code</b> to share</li>
	<li>
		For each person who signs up using your code, you get:
		<ul>
			<li>A <b>20€ discount</b> on head movements course</li>
			<li>
				Alternatively, a <b>15€ discount</b> on a private class with Jukka or Anna (1h), to be taken
				before end of the year
			</li>
		</ul>
	</li>
	<li>
		The person who signed up for Zero to Zouk beginner course gets:
		<ul>
			<li>A <b>30€ discount</b> on the course price</li>
			<li>They get to learn Brazilian Zouk!</li>
		</ul>
	</li>
</ul>
-->
