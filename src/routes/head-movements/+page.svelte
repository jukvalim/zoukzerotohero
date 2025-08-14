<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import head_movements_image from '$lib/assets/images/head_movement.jpg';
</script>

<svelte:head>
	<title>Head Movements Course</title>
	<meta property="og:title" content="Head Movements Course" />
	<meta property="og:description" content="Learn Brazilian Zouk Head Movements, six weeks course" />
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
	movements: Basic step, Viradinha, Lateral, Preparation (aka Lunge), Simple Turn and Pião.
</p>

<h2 class="mt-8 text-xl font-bold md:text-2xl">What You'll Get</h2>

<ul>
	<li>6 structured weekly classes (1.5 hours each, Mondays)</li>
	<li>Recap videos after each class</li>
	<li>Personalized feedback</li>
</ul>

<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">Course Details</h2>

<ul>
	<li><b>Teachers:</b> Jukka, Anna as assistant teacher</li>
	<li><b>Start date:</b> Monday, September 1st</li>
	<li><b>Duration:</b> 6 weeks</li>
	<li><b>Time:</b> Mondays, 19:30-21:00</li>
	<li>
		<b>Location:</b> <a href="https://www.helsinkidancecentral.com/">Helsinki Dance Central</a>,
		Sörnaisten Rantatie 33 C, 4th Floor
	</li>
	<li><b>Teaching language:</b> English</li>
	<li><b>Price:</b> 130€, couple registration 240€</li>
</ul>

<h2 class="mt-8 mb-6 text-xl font-bold md:text-2xl">Sign up Now</h2>

<div class="flex max-w-md flex-col gap-4 text-xl">
	<span
		class="disabled:opacity-50 rounded-md bg-gray-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-gray-600 cursor-not-allowed"
		aria-disabled="true"
		><span class="line-through">👉 Register as a follower</span> (Sold out)</span
	>

	<a
		href="https://holvi.com/shop/zoukzerotohero/product/0cd1ff232e16afa16c99340f92527ba6/"
		class="rounded-md bg-blue-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-600"
		>👉 Register as a leader</a
	>

	<span
		class="disabled:opacity-50 rounded-md bg-gray-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-gray-600 cursor-not-allowed"
		aria-disabled="true"
		><span class="line-through">👉 Couple registration</span> (Sold out)</span
	>
</div>

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
