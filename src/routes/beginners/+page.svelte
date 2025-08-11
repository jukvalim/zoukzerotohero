<script lang="ts">
	import partner_pose_landscape from '$lib/assets/images/partner_pose_landscape.jpg';
	import partner_pose_portrait from '$lib/assets/images/partner_pose_portrait.jpg';
	import jukka from '$lib/assets/images/jukka.jpg';
	import anna from '$lib/assets/images/anna.jpg';
	import Introduction from '$lib/Introduction.svelte';
	let accordionOpen = $state(false);
	let valueBreakdownOpen = $state(false);
	let teachersAccordionOpen = $state(false);
	let zoukSaturdaysAccordionOpen = $state(false);
	import { onMount } from 'svelte';

	const leaderBaseUrl =
		'https://holvi.com/shop/zoukzerotohero/product/4a08997da8a56995f96a05afc1966fe4/';
	const followerBaseUrl =
		'https://holvi.com/shop/zoukzerotohero/product/d9d2beb1cd72ca822f2bf2c971a77a43/';

	function buildUrlWithUtm(baseUrl: string, searchParams: URLSearchParams): string {
		const utm = new URLSearchParams();
		for (const [key, value] of searchParams.entries()) {
			if ((key.toLowerCase() === 'ref' || key.toLowerCase().startsWith('utm_')) && value) {
				utm.append(key, value);
			}
		}
		const qs = utm.toString();
		if (!qs) return baseUrl;
		const sep = baseUrl.includes('?') ? '&' : '?';
		return `${baseUrl}${sep}${qs}`;
	}

	let leaderUrl = $state(leaderBaseUrl);
	let followerUrl = $state(followerBaseUrl);

	onMount(() => {
		try {
			const params = new URLSearchParams(window.location.search);
			leaderUrl = buildUrlWithUtm(leaderBaseUrl, params);
			followerUrl = buildUrlWithUtm(followerBaseUrl, params);
		} catch {}
	});
</script>

<svelte:head>
	<title>Zero to Zouk - Brazilian Zouk Beginner Course</title>
	<meta property="og:title" content="Zero to Zouk - Brazilian Zouk Beginner Course" />
	<meta
		property="og:description"
		content="Learn to social dance in 6 weeks. Monday evenings starting 1.9., no partner needed."
	/>
	<meta property="og:url" content="https://zoukzerotohero.com/beginners" />
	<meta property="og:image" content={partner_pose_landscape} />
</svelte:head>

<!-- Hero Section -->
<div
	class="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-12"
>
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<div class="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-purple-400"></div>
		<div class="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-pink-400"></div>
		<div class="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-blue-400"></div>
	</div>

	<div class="relative z-10">
		<!-- Main Headline -->
		<div class="mb-4 text-center">
			<h1
				class="mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent md:text-6xl lg:text-7xl"
			>
				From Zero to Zouk
			</h1>
			<h2 class="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
				Brazilian Zouk Beginner Course
			</h2>
			<p class="mx-auto max-w-3xl text-xl text-gray-600 md:text-2xl">
				Learn to Social Dance in 6 Weeks &mdash; Even If You've Never Danced Before
			</p>
		</div>

		<!-- Key Benefits Preview -->
		<div class="mb-8 grid gap-4 md:grid-cols-3">
			<div
				class="flex items-center justify-center rounded-xl bg-white/80 p-4 text-center shadow-lg backdrop-blur"
			>
				<div class="flex flex-col items-center">
					<span class="mb-2 text-3xl">💃</span>
					<span class="font-semibold text-gray-800">No Partner Needed</span>
				</div>
			</div>
			<div
				class="flex items-center justify-center rounded-xl bg-white/80 p-4 text-center shadow-lg backdrop-blur"
			>
				<div class="flex flex-col items-center">
					<span class="mb-2 text-3xl">🎁</span>
					<span class="font-semibold text-gray-800">Money-Back Guarantee</span>
				</div>
			</div>
			<div
				class="flex items-center justify-center rounded-xl bg-white/80 p-4 text-center shadow-lg backdrop-blur"
			>
				<div class="flex flex-col items-center">
					<span class="mb-2 text-3xl">🌟</span>
					<span class="font-semibold text-gray-800">Structured learning & support videos</span>
				</div>
			</div>
		</div>

		<!-- Enhanced CTA Section -->
		<div class="mb-4 text-center">
			<div class="mb-4">
				<p class="text-lg font-medium text-gray-700">
					<span class="font-bold text-red-600">Starts Monday, September 1st</span>
				</p>
			</div>

			<div class="mx-auto flex max-w-lg flex-col gap-4 md:flex-row md:justify-center">
				<a
					href={leaderUrl}
					target="_blank"
					rel="noopener"
					class="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-2xl"
				>
					<span class="relative z-10 flex items-center justify-center">
						<span class="mr-2">🎯</span>
						Register as Leader
					</span>
					<div
						class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 transition-opacity group-hover:opacity-100"
					></div>
				</a>
				<a
					href={followerUrl}
					target="_blank"
					rel="noopener"
					class="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-purple-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:from-purple-600 hover:to-purple-700 hover:shadow-2xl"
				>
					<span class="relative z-10 flex items-center justify-center">
						<span class="mr-2">✨</span>
						Register as Follower
					</span>
				</a>
			</div>
		</div>
	</div>
</div>

<!-- Video Section -->
<div class="mb-6">
	<div class="mb-6 text-center">
		<h3 class="mb-2 text-2xl font-bold text-gray-800">See What It's Like</h3>
		<p class="text-gray-600">Here's some video from one of our Helsinki socials</p>
	</div>

	<div class="relative">
		<iframe
			class="w-full rounded-xl shadow-2xl"
			style="aspect-ratio: 16/9;"
			width="100%"
			src="https://www.youtube.com/embed/bFPCRmFNvjU?si=2_LukWGlPQeiNVja&autoplay=1&mute=1&loop=1&playlist=bFPCRmFNvjU&modestbranding=1&showinfo=0"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>

	</div>
</div>

<!-- Story & Teacher Image -->
<div class="mb-6 md:mb-12 md:grid md:grid-cols-2 md:items-center md:gap-8">
	<div class="mb-4 p-6 md:mb-0">
		<p class="mb-4 text-lg">
			Have you ever seen Brazilian Zouk or another couple dance and thought, "That looks amazing...
			but I could never do that"?
		</p>
		<p class="text-lg font-medium">We're here to prove you wrong&mdash;in the best way.</p>
	</div>

	<div class="flex flex-col items-center">
		<picture>
			<source srcset={partner_pose_landscape} media="(min-width: 768px)" />
			<img
				src={partner_pose_portrait}
				alt="Jukka and Anna"
				class="h-auto w-full max-w-sm rounded-xl shadow-2xl md:max-w-md"
			/>
		</picture>
		<p class="mt-4 text-center text-sm text-gray-600">Jukka and Anna &mdash; course teachers</p>
	</div>
</div>

<!-- Course Description -->
<div class="mb-12 rounded-xl border bg-white p-6 shadow-lg">
	<p class="text-lg leading-relaxed">
		Whether you're a complete beginner, have some experience but social dancing is still a challenge
		or a dancer from another style, this course is designed to get you confidently social dancing in
		just six weeks. No partner needed. No previous experience required. Just curiosity, a
		willingness to try, and a bit of consistency.
	</p>
</div>

<!-- What You'll Get Section -->
<div class="mb-12">
	<h2 class="mb-6 text-center text-2xl font-bold md:text-3xl">
		<span class="mr-3 inline-block rounded-full bg-green-100 p-2">🎁</span>
		What You'll Get
	</h2>

	<div class="mt-6 mb-6 rounded-xl border border-yellow-200 bg-yellow-50 p-6">
		<div class="mb-3 flex items-center">
			<span class="mr-3 text-2xl">🛡️</span>
			<h3 class="font-bold text-yellow-800">Money-back guarantee</h3>
		</div>
		<p class="text-yellow-700">
			If you show up, do the work, and still don't feel able to dance socially, we'll refund you in
			full. Just let us know how we can improve.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		<div class="rounded-xl border border-green-200 bg-green-50 p-6">
			<h3 class="mb-3 font-bold text-green-800">📚 Core Learning</h3>
			<ul class="space-y-2 text-green-700">
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span><b>6 structured weekly classes</b> (1.5 hours each, Mondays)</span>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span
						><a href="/zouk-o-saturday" class="underline">5 Zouk'o'Saturdays included</a> (1.5 hours
						of drop-in classes + 1.5 hours of social dancing each)</span
					>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span
						><b>Structured learning</b> &mdash; basics, variations and techniques selected to be useful
						for social dancing</span
					>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span><b>Recap & practice videos</b> after each class</span>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span>Bonus <b>solo practice materials</b></span>
				</li>
			</ul>
		</div>

		<div class="rounded-xl border border-blue-200 bg-blue-50 p-6">
			<h3 class="mb-3 font-bold text-blue-800">🤝 Support</h3>
			<ul class="space-y-2 text-blue-700">
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span><b>Rotating partners</b> &mdash; no need to bring your own</span>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span
						><a href="/community-guidelines" target="_blank" rel="noopener" class="underline"
							>Inclusive, welcoming community</a
						> + WhatsApp group</span
					>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span><b>Personalized feedback & confidence-building</b></span>
				</li>
				<li class="flex items-start">
					<span class="mr-2">✓</span>
					<span>Clear guidance on <b>how to start dancing at parties</b></span>
				</li>
			</ul>
		</div>
	</div>
</div>

<!-- Who It's For Section -->
<div class="mb-12">
	<h2 class="mb-6 text-center text-2xl font-bold md:text-3xl">
		<span class="mr-3 inline-block rounded-full bg-purple-100 p-2">🙋</span>
		Who It's For
	</h2>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		<div class="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
			<div class="mb-2 text-2xl">🆕</div>
			<p class="mb-2 font-medium text-purple-800">Total beginners</p>
			<p class="text-sm text-purple-700">With no dance experience whatsoever</p>
		</div>
		<div class="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
			<div class="mb-2 text-2xl">💃</div>
			<p class="mb-2 font-medium text-purple-800">Other dance styles</p>
			<p class="text-sm text-purple-700">Social dancers from salsa, bachata, tango, etc.</p>
		</div>
		<div class="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
			<div class="mb-2 text-2xl">🌟</div>
			<p class="mb-2 font-medium text-purple-800">Confidence seekers</p>
			<p class="text-sm text-purple-700">Wanting to improve movement and self-assurance</p>
		</div>
		<div class="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
			<div class="mb-2 text-2xl">👥</div>
			<p class="mb-2 font-medium text-purple-800">Community enthusiasts</p>
			<p class="text-sm text-purple-700">Looking for a fun, low-pressure way to meet others</p>
		</div>
		<div class="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
			<div class="mb-2 text-2xl">📱</div>
			<p class="mb-2 font-medium text-purple-800">Screen time refugees</p>
			<p class="text-sm text-purple-700">
				Fed up with all the screen time, wanting to move in real life
			</p>
		</div>
		<div class="rounded-lg border border-purple-200 bg-purple-50 p-4 text-center">
			<div class="mb-2 text-2xl">❤️</div>
			<p class="mb-2 font-medium text-purple-800">Connection seekers</p>
			<p class="text-sm text-purple-700">Craving meaningful human interaction and expression</p>
		</div>
	</div>
</div>

<!-- Philosophy Section -->
<div class="mb-12 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 p-8 text-center">
	<p class="mb-4 text-lg font-medium">
		We believe partner dance—and Brazilian Zouk in particular—is more than just steps. It's about
		connection, expression, and community.
	</p>
	<p class="text-lg">
		This course is our way of bringing people together, inviting new people into our dance scene,
		and doing things differently.
	</p>
</div>

<!-- Course Details Section -->
<div class="mb-12">
	<h2 class="mb-6 text-center text-2xl font-bold md:text-3xl">
		<span class="mr-3 inline-block rounded-full bg-blue-100 p-2">🗓️</span>
		Course Details
	</h2>

	<div class="rounded-xl border border-blue-200 bg-blue-50 p-6">
		<div class="grid gap-6 md:grid-cols-2">
			<div>
				<div class="mb-3 flex items-center">
					<span class="mr-3 text-xl">📅</span>
					<span class="font-bold">Schedule</span>
				</div>
				<ul class="space-y-2 text-blue-700">
					<li><b>Start date:</b> Monday, September 1st</li>
					<li><b>Duration:</b> 6 weeks</li>
					<li><b>Time:</b> Mondays, 18:00-19:30</li>
				</ul>
			</div>
			<div>
				<div class="mb-3 flex items-center">
					<span class="mr-3 text-xl">📍</span>
					<span class="font-bold">Location & Team</span>
				</div>
				<ul class="space-y-2 text-blue-700">
					<li><b>Location:</b> Helsinki Dance Central, Sörnäisten Rantatie 33 C, 4th Floor</li>
					<li><b>Teachers:</b> Jukka & Anna</li>
					<li>
						<b>Includes:</b> 5 optional
						<a href="/zouk-o-saturday" target="_blank" rel="noopener" class="underline"
							>Zouk'o'Saturdays</a
						> with varying teachers
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<!-- Pricing Section -->
<div class="mb-12">
	<h2 class="mb-6 text-center text-2xl font-bold md:text-3xl">
		<span class="mr-3 inline-block rounded-full bg-green-100 p-2">💰</span>
		Pricing & Value
	</h2>

	<div class="mb-6 rounded-xl border border-green-200 bg-green-50 p-6">
		<h3 class="mb-4 text-center font-bold text-green-800">What's Included</h3>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="text-center">
				<div class="mb-2 text-3xl font-bold text-green-600">9</div>
				<div class="text-green-700">Hours of course classes on Mondays</div>
			</div>
			<div class="text-center">
				<div class="mb-2 text-3xl font-bold text-green-600">15</div>
				<div class="text-green-700">
					Extra <a href="/zouk-o-saturday" target="_blank" rel="noopener" class="underline"
						>Zouk'o'Saturday</a
					> drop-in and social dancing hours
				</div>
			</div>
		</div>
	</div>

	<div class="mb-6 grid gap-6 md:grid-cols-2">
		<div class="rounded-xl border border-gray-200 bg-white p-6 text-center">
			<h3 class="mb-3 font-bold text-gray-800">Regular Price</h3>
			<div class="text-2xl font-bold text-gray-800">€300</div>
		</div>
		<div class="rounded-xl border border-gray-200 bg-white p-6 text-center">
			<h3 class="mb-3 font-bold text-gray-800">Youth Price</h3>
			<div class="mb-1 text-sm text-gray-600">(26 years old or less)</div>
			<div class="text-2xl font-bold text-gray-800">€260</div>
		</div>
	</div>

	<div class="overflow-hidden rounded-xl border border-blue-200">
		<button
			onclick={() => (valueBreakdownOpen = !valueBreakdownOpen)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					valueBreakdownOpen = !valueBreakdownOpen;
				}
			}}
			class="flex w-full items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-6 text-left transition-colors hover:from-blue-100 hover:to-blue-200"
			tabindex="0"
			aria-expanded={valueBreakdownOpen}
		>
			<h3 class="text-lg font-semibold text-blue-800">Value Breakdown *</h3>
			<div
				class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
			>
				<span class="text-lg font-bold">{valueBreakdownOpen ? '−' : '+'}</span>
			</div>
		</button>

		{#if valueBreakdownOpen}
			<div class="border-t border-blue-200 bg-blue-50 p-6">
				<div class="grid gap-4 md:grid-cols-3">
					<div class="text-center">
						<div class="mb-1 text-2xl font-bold text-blue-600">24</div>
						<div class="text-sm text-blue-700">Total Hours</div>
					</div>
					<div class="text-center">
						<div class="mb-1 text-2xl font-bold text-blue-600">€12.50</div>
						<div class="text-sm text-blue-700">Per Hour (Regular)</div>
					</div>
					<div class="text-center">
						<div class="mb-1 text-2xl font-bold text-blue-600">€10.83</div>
						<div class="text-sm text-blue-700">Per Hour (Youth)</div>
					</div>
				</div>
				<div class="mt-4 text-center text-sm text-blue-600">
					* Value breakdown doesn't account for things like practice materials or money-back
					guarantee.
				</div>
			</div>
		{/if}
	</div>
</div>

<hr class="my-12 border-gray-300" />

<!-- Ready to Join Section -->
<div id="ready-to-join" class="mb-12 text-center">
	<h2 class="mb-6 text-2xl font-bold md:text-3xl">
		<span class="mr-3 inline-block rounded-full bg-purple-100 p-2">🔗</span>
		Ready to Join?
	</h2>

	<div
		class="mb-8 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-8"
	>
		<p class="mb-4 text-lg font-medium">Make this the moment you finally start dancing.</p>
		<p class="text-lg">
			Join the course, show up, and if it's not working for you&mdash;we'll make it right.
		</p>
	</div>

	<div class="mx-auto flex max-w-md flex-col justify-center gap-4 md:flex-row">
		<a
			href={leaderUrl}
			target="_blank"
			rel="noopener"
			class="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl"
			>👉 Register Now - leader</a
		>

		<a
			href={followerUrl}
			target="_blank"
			rel="noopener"
			class="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-center font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-xl"
			>👉 Register Now - follower</a
		>
	</div>
</div>

<!-- Leader/Follower Accordion -->
<div class="mb-2 overflow-hidden rounded-xl border border-gray-200">
	<button
		onclick={() => (accordionOpen = !accordionOpen)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				accordionOpen = !accordionOpen;
			}
		}}
		class="flex w-full items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-left transition-colors hover:from-gray-100 hover:to-gray-200"
		tabindex="0"
		aria-expanded={accordionOpen}
	>
		<h3 class="text-xl font-semibold">Leader? Follower? What are those?</h3>
		<div
			class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
		>
			<span class="text-lg font-bold">{accordionOpen ? '−' : '+'}</span>
		</div>
	</button>

	{#if accordionOpen}
		<div class="border-t border-gray-200 bg-white p-6">
			<p class="mb-4 text-lg">
				In partner dances like Brazilian Zouk, there are two roles that work together to create the
				dance: leader and follower.
			</p>
			<p class="text-lg">
				Traditionally, the leader has been a man and the follower a woman. But nowadays, it's not
				that unusual for a woman to dance as a leader or a man to dance as a follower. Feel free to
				register as either role, regardless of your gender.
			</p>
		</div>
	{/if}
</div>

<!-- Teachers Accordion -->
<div class="mb-4 overflow-hidden rounded-xl border border-gray-200">
	<button
		onclick={() => (teachersAccordionOpen = !teachersAccordionOpen)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				teachersAccordionOpen = !teachersAccordionOpen;
			}
		}}
		class="flex w-full items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-left transition-colors hover:from-gray-100 hover:to-gray-200"
		tabindex="0"
		aria-expanded={teachersAccordionOpen}
	>
		<h3 class="text-xl font-semibold">Can you tell me more about the teachers?</h3>
		<div
			class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
		>
			<span class="text-lg font-bold">{teachersAccordionOpen ? '−' : '+'}</span>
		</div>
	</button>

	{#if teachersAccordionOpen}
		<div class="border-t border-gray-200 bg-white p-6">
			<section class="space-y-12">
				<Introduction imgSrc={jukka} imgAlt="Jukka" name="Jukka Välimaa" alwaysExpanded>
					<p class="mb-2">
						Jukka is the main organizer for Zouk Zero to Hero. He started learning Brazilian Zouk in
						2010, never stopped, and does not intend to stop. The craft and the art of the dance -
						and of teaching the dance - is endlessly fascinating to him.
					</p>
					<p class="mb-2">
						His main teachers have been Freddy and Andressa, and he taught for many years at
						Helsinki Dance Central. He teaches mostly in Helsinki, but has also taught in many other
						European countries over the years.
					</p>
				</Introduction>

				<Introduction imgSrc={anna} imgAlt="Anna" name="Anna Zahrmann" alwaysExpanded>
					<p class="mb-2">
						Anna caught the Brazilian Zouk bug in 2020 (thanks, Jukka and Kristina!) — and quickly
						found herself hooked. Inspired by the creativity and freedom the dance offers, what
						began as a hobby soon grew into a deep passion. She started her journey learning from
						Jukka & Kristina and Freddy & Andressa, and later traveled across Europe to study with
						top international teachers and immerse herself in the global Zouk community.
					</p>
					<p class="mb-2">
						Over time, Anna transitioned from student to assistant, and now teaches and organizes
						events in the local Zouk scene.
					</p>
				</Introduction>
			</section>
		</div>
	{/if}
</div>

<!-- Zouk'o'Saturdays Accordion -->
<div class="mb-4 overflow-hidden rounded-xl border border-gray-200">
	<button
		onclick={() => (zoukSaturdaysAccordionOpen = !zoukSaturdaysAccordionOpen)}
		onkeydown={(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				zoukSaturdaysAccordionOpen = !zoukSaturdaysAccordionOpen;
			}
		}}
		class="flex w-full items-center justify-between bg-gradient-to-r from-gray-50 to-gray-100 p-6 text-left transition-colors hover:from-gray-100 hover:to-gray-200"
		tabindex="0"
		aria-expanded={zoukSaturdaysAccordionOpen}
	>
		<h3 class="text-xl font-semibold">Do I need to go to all the included Saturdays?</h3>
		<div
			class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-700 shadow-md"
		>
			<span class="text-lg font-bold">{zoukSaturdaysAccordionOpen ? '−' : '+'}</span>
		</div>
	</button>

	{#if zoukSaturdaysAccordionOpen}
		<div class="border-t border-gray-200 bg-white p-6">
			<p class="mb-2 text-lg">
				No. You don't have to attend all the
				<a href="/zouk-o-saturday" target="_blank" rel="noopener" class="underline"
					>Zouk'o'Saturdays</a
				>. They are included, but how many you attend is up to you.
			</p>

			<p class="text-lg">
				That said, we encourage you to go to as many as you can! When learning a new skill, the more
				practice you get, the better. Also, our money-back guarantee only applies if you attend at
				least two of them.
			</p>
		</div>
	{/if}
</div>

<!-- Final CTA -->
<div
	class="mb-24 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-8 text-center md:mb-12"
>
	<p class="mb-2 text-3xl font-bold text-green-800">🙌 See you in class! 🙌</p>
</div>

<!-- Sticky mobile CTA -->
<div
	class="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden"
>
	<div class="mx-auto flex max-w-xl items-center justify-center gap-3 p-3">
		<a
			href={leaderUrl}
			target="_blank"
			rel="noopener"
			class="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-md"
		>
			Register – Leader
		</a>
		<a
			href={followerUrl}
			target="_blank"
			rel="noopener"
			class="flex-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-center text-sm font-bold text-white shadow-md"
		>
			Register – Follower
		</a>
	</div>
</div>
