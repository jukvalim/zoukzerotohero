<script lang="ts">
	import partner_pose_landscape from '$lib/assets/images/partner_pose_landscape.jpg';
	import partner_pose_portrait from '$lib/assets/images/partner_pose_portrait.jpg';
	import jukka from '$lib/assets/images/jukka.jpg';
	import anna from '$lib/assets/images/anna.jpg';
	import { Introduction, Accordion, Modal } from '$lib';
	import { onMount } from 'svelte';

	// Fixed headline
	const chosenHeadline = 'Brazilian Zouk Basics Course';

	const stepInLeaderUrl = 'https://holvi.com/shop/zoukzerotohero/product/d14df989171d0a27e22db1445cb5a219/';
	const stepInFollowerUrl = 'https://holvi.com/shop/zoukzerotohero/product/d3190ef0b2b70f0a024bc2c6e8fad64b/';
	const stepInCoupleUrl = 'https://holvi.com/shop/zoukzerotohero/product/ab3cba2db5de1cb1983fc1172bebc554/';
	const allInLeaderUrl = 'https://holvi.com/shop/zoukzerotohero/product/b3f6366bbc30090790e5a54a7d7e8a6b/';
	const allInFollowerUrl = 'https://holvi.com/shop/zoukzerotohero/product/4680985e5441903eca881188eb716dd4/';
	const allInCoupleUrl = 'https://holvi.com/shop/zoukzerotohero/product/c234c3c3a840073e48eb4926f6d68f6e/';

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


	// State for registration flow
	let selectedRole: string | null = $state(null); // 'leader', 'follower', or 'couple'
	let selectedPackage: string | null = $state(null); // 'step-in' or 'all-in'
	let finalRegistrationUrl = $state('');

	// State for teacher modal
	let isTeacherModalOpen = $state(false);

	// Early bird pricing configuration
	const earlyBirdDeadline = 'Wednesday, October 1st';
	const isEarlyBirdActive = true; // Set to false when early bird period ends

	// Pricing structure
	const pricing = {
		stepIn: {
			earlyBird: { individual: 190, couple: 340 },
			regular: { individual: 220, couple: 400 }
		},
		allIn: {
			earlyBird: { individual: 270, couple: 500 },
			regular: { individual: 300, couple: 560 }
		}
	};

	// Build URLs with UTM parameters
	let stepInLeaderUrlFinal = $state(stepInLeaderUrl);
	let stepInFollowerUrlFinal = $state(stepInFollowerUrl);
	let stepInCoupleUrlFinal = $state(stepInCoupleUrl);
	let allInLeaderUrlFinal = $state(allInLeaderUrl);
	let allInFollowerUrlFinal = $state(allInFollowerUrl);
	let allInCoupleUrlFinal = $state(allInCoupleUrl);

	onMount(() => {
		try {
			// URL building with UTM parameters
			const params = new URLSearchParams(window.location.search);
			stepInLeaderUrlFinal = buildUrlWithUtm(stepInLeaderUrl, params);
			stepInFollowerUrlFinal = buildUrlWithUtm(stepInFollowerUrl, params);
			stepInCoupleUrlFinal = buildUrlWithUtm(stepInCoupleUrl, params);
			allInLeaderUrlFinal = buildUrlWithUtm(allInLeaderUrl, params);
			allInFollowerUrlFinal = buildUrlWithUtm(allInFollowerUrl, params);
			allInCoupleUrlFinal = buildUrlWithUtm(allInCoupleUrl, params);
		} catch {}
	});

	// Function to select role
	function selectRole(role: string) {
		selectedRole = role;
		selectedPackage = null; // Reset package selection
	}

	// Function to select package and set final URL
	function selectPackage(packageType: string) {
		selectedPackage = packageType;

		// Set the final registration URL based on selections
		if (selectedRole === 'leader' && packageType === 'step-in') {
			finalRegistrationUrl = stepInLeaderUrlFinal;
		} else if (selectedRole === 'leader' && packageType === 'all-in') {
			finalRegistrationUrl = allInLeaderUrlFinal;
		} else if (selectedRole === 'follower' && packageType === 'step-in') {
			finalRegistrationUrl = stepInFollowerUrlFinal;
		} else if (selectedRole === 'follower' && packageType === 'all-in') {
			finalRegistrationUrl = allInFollowerUrlFinal;
		} else if (selectedRole === 'couple' && packageType === 'step-in') {
			finalRegistrationUrl = stepInCoupleUrlFinal;
		} else if (selectedRole === 'couple' && packageType === 'all-in') {
			finalRegistrationUrl = allInCoupleUrlFinal;
		}
	}

	// Function to reset selections
	function resetSelections() {
		selectedRole = null;
		selectedPackage = null;
		finalRegistrationUrl = '';
	}

	function scrollToRegistration() {
		const element = document.getElementById('ready-to-join');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Teacher modal functions
	function openTeacherModal() {
		isTeacherModalOpen = true;
	}

	function closeTeacherModal() {
		isTeacherModalOpen = false;
	}
</script>

<svelte:head>
	<title>From Zero to Zouk - {chosenHeadline}</title>
	<meta property="og:title" content="From Zero to Zouk - Brazilian Zouk Basics Course" />
	<meta
		property="og:description"
		content="Learn to social dance in 6 weeks. Monday evenings starting March 2nd, no partner needed."
	/>
	<meta property="og:url" content="https://zoukzerotohero.com/beginners" />
	<meta property="og:image" content={partner_pose_landscape} />
</svelte:head>

<!-- Course Cancellation Notice -->
<div class="mb-8 rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6 text-center">
	<div class="mb-4">
		<span class="text-4xl">😔</span>
	</div>
	<h2 class="mb-3 text-2xl font-bold text-red-800">
		Course Update
	</h2>
	<p class="mb-4 text-lg text-red-700">
		Unfortunately, we're not organizing this course again this autumn after all.
	</p>
	<p class="mb-4 text-lg text-red-700">
		But you can still try out Brazilian Zouk at our
		<a href="/zouk-o-saturday" class="font-semibold text-red-800 underline hover:text-red-900">
			Zouk'o'Saturday events
		</a>!
		We have drop-in classes every Saturday that start from the very basics - no partner needed.
	</p>
	<p class="text-lg font-medium text-red-800">
		Please stay tuned for spring! 🌸
	</p>
</div>

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
				{chosenHeadline}
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
					<span class="mb-2 text-3xl">👣</span>
					<span class="font-semibold text-gray-800">No previous dance experience needed</span>
				</div>
			</div>
			<div
				class="flex items-center justify-center rounded-xl bg-white/80 p-4 text-center shadow-lg backdrop-blur"
			>
				<div class="flex flex-col items-center">
					<span class="mb-2 text-3xl">🌟</span>
					<span class="font-semibold text-gray-800">Structured learning in classes & support videos</span>
				</div>
			</div>
		</div>

		<!-- Enhanced CTA Section -->
		<div class="mb-4 text-center">
			<!-- Try it out on Monday CTA
			<div class="mb-6 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 p-4">
				<p class="mb-3 text-lg font-medium text-orange-800">
					<span class="font-bold text-orange-600">🎉 Want to try out Zouk before joining the course?</span>
				</p>
				<p class="mb-4 text-sm text-orange-700">
					Last chance of the summer to dance outdoors! Join us at Töölönlahti stage this Wednesday, 18:00.
				</p>
				<a
					href="https://fb.me/e/6GWIUHWWW"
					target="_blank"
					rel="noopener"
					class="inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl plausible-event-name=TryItOutThursdayClick"
				>
					<span class="flex items-center justify-center">
						<span class="mr-2">🎪</span>
						Tell me more!
					</span>
				</a>
			</div> -->


			<div class="mb-4">
				<p class="text-lg font-medium text-gray-700">
					<span class="font-bold text-red-600">Starts Monday, March 2nd</span>
				</p>
			</div>

			<div class="mx-auto flex max-w-lg justify-center">
				<button
					disabled
					class="w-full rounded-full bg-gradient-to-r from-gray-400 to-gray-500 px-8 py-4 font-bold text-white shadow-xl cursor-not-allowed opacity-60"
				>
					Registration will open soon
				</button>
			</div>
		</div>
	</div>
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
					<li><b>Start date:</b> Monday, March 2nd</li>
					<li><b>End date:</b> Monday, April 6th</li>
					<li><b>Duration:</b> 6 weeks</li>
					<li><b>Time:</b> Mondays, 19:30-21:00</li>
				</ul>
			</div>
			<div>
				<div class="mb-3 flex items-center">
					<span class="mr-3 text-xl">📍</span>
					<span class="font-bold">Location & Team</span>
				</div>
				<ul class="space-y-2 text-blue-700">
					<li><b>Location:</b> Helsinki Dance Central, Sörnäisten Rantatie 33 C, 4th Floor</li>
					<li><b>Teachers:</b> Jukka & Anna
						<button
							onclick={openTeacherModal}
							class="ml-2 text-blue-600 underline hover:text-blue-800"
						>
							Learn more
						</button>
					</li>
				</ul>
			</div>
			<div>
				<div class="mb-3 flex items-center">
					<span class="mr-3 text-xl">💰</span>
					<span class="font-bold">Price</span>
				</div>
				<ul class="space-y-2 text-blue-700">
					<li><b>Early bird price</b> until Sun 28th	of September</li>
					<li><b>Step In package</b>: <span class="line-through">220€</span> 190€</li>
					<li><b>All In package</b>: <span class="line-through">300€</span> 270€, includes Saturday classes & socials and money-back guarantee</li>
					<li>Lower prices for couple registration</li>
					<li>More details available when choosing package</li>
				</ul>
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
		<button
			onclick={openTeacherModal}
			class="mt-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg"
		>
			Learn more about your teachers
		</button>
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
					<span>Bonus <b>practice materials</b></span>
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

	<!-- Optional Package Section -->
	<div class="mt-6 rounded-xl border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 p-6">
		<div class="mb-3 flex items-center">
			<span class="mr-3 text-2xl">⭐</span>
			<h3 class="font-bold text-purple-800">Optional: All In Package</h3>
		</div>
		<p class="mb-4 text-purple-700">
			Want to maximize your learning? Add these extras to your core course:
		</p>
		<div class="grid gap-4 md:grid-cols-2">
			<div class="rounded-lg border border-purple-200 bg-white/50 p-4">
				<div class="mb-2 flex items-center">
					<span class="mr-2 text-xl">🎪</span>
					<span class="font-semibold text-purple-800">Zouk'o'Saturdays</span>
				</div>
				<p class="text-sm text-purple-700">
					<a href="/zouk-o-saturday" class="underline">5 additional sessions</a> (1.5 hours of drop-in classes + 1.5 hours of social dancing each)
				</p>
			</div>
			<div class="rounded-lg border border-purple-200 bg-white/50 p-4">
				<div class="mb-2 flex items-center">
					<span class="mr-2 text-xl">🛡️</span>
					<span class="font-semibold text-purple-800">Money-back guarantee</span>
				</div>
				<p class="text-sm text-purple-700">
					If you show up, do the work, and still don't feel able to dance socially, we'll refund you in full.
				</p>
			</div>
		</div>
	</div>
</div>

<!-- Who It's For Section
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
</div> -->

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


<!-- Pricing Section
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


	<div class="mb-6 grid gap-6 md:grid-cols-3">
		<div class="rounded-xl border border-gray-200 bg-white p-6 text-center">
			<h3 class="mb-3 font-bold text-gray-800">Regular Price</h3>
			<div class="text-2xl font-bold text-gray-800">€300</div>
		</div>
		<div class="rounded-xl border border-gray-200 bg-white p-6 text-center">
			<h3 class="mb-3 font-bold text-gray-800">Couple Price</h3>
			<div class="mb-1 text-sm text-gray-600">(Two people together)</div>
			<div class="text-2xl font-bold text-gray-800">€540</div>
		</div>
	</div>

	<Accordion
		title="Value Breakdown *"
		analyticsEvent="ValueBreakdownAccordionOpen"
		buttonClass="bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200"
		contentClass="bg-blue-50"
		titleClass="text-lg font-semibold text-blue-800"
	>
		<div class="grid gap-4 md:grid-cols-3">
			<div class="text-center">
				<div class="mb-1 text-2xl font-bold text-blue-600">24</div>
				<div class="text-sm text-blue-700">Total Hours</div>
			</div>
			<div class="text-center">
				<div class="mb-1 text-2xl font-bold text-blue-600">€12.50</div>
				<div class="text-sm text-blue-700">Per Hour (Regular)</div>
			</div>
		</div>
		<div class="mt-4 text-center text-sm text-blue-600">
			* Value breakdown doesn't account for things like practice materials or money-back guarantee.
		</div>
	</Accordion>
</div>

<hr class="my-12 border-gray-300" />
-->

<!-- Course Cancelled Section -->
<div id="ready-to-join" class="mb-12 text-center">
	<h2 class="mb-6 text-2xl font-bold md:text-3xl">
		<span class="mr-3 inline-block rounded-full bg-gray-100 p-2">❌</span>
		Course Cancelled
	</h2>

	<div
		class="mb-8 rounded-xl border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-8"
	>
		<p class="mb-4 text-lg font-medium text-gray-700">Unfortunately, this course has been cancelled for autumn 2024.</p>
		<p class="mb-4 text-lg text-gray-600">
			We apologize for any inconvenience this may cause.
		</p>
		<p class="text-lg font-medium text-gray-800">
			Please stay tuned for our spring course announcement! 🌸
		</p>
	</div>

	<!-- Registration Disabled Message -->
	<div class="mb-8 rounded-xl border border-gray-300 bg-gray-100 p-8 text-center">
		<div class="mb-4">
			<span class="text-5xl">⏳</span>
		</div>
		<h3 class="mb-4 text-xl font-bold text-gray-700">Registration will open soon</h3>
		<p class="text-lg text-gray-600">
			We're preparing to open registrations. Check back soon!
		</p>
	</div>
</div>

<!-- Leader/Follower Accordion -->
<Accordion title="Leader? Follower? What are those?" analyticsEvent="LeaderFollowerAccordionOpen">
	<p class="mb-4 text-lg">
		In partner dances like Brazilian Zouk, there are two roles that work together to create the
		dance: leader and follower.
	</p>
	<p class="text-lg">
		Traditionally, the leader has been a man and the follower a woman. But nowadays, it's not that
		unusual for a woman to dance as a leader or a man to dance as a follower. Feel free to register
		as either role, regardless of your gender.
	</p>
</Accordion>

<!-- Teacher Modal -->
<Modal isOpen={isTeacherModalOpen} title="Meet Your Teachers" size="xl" on:close={closeTeacherModal}>
	<!-- Teacher Introduction Video -->
	<div class="mb-8">
		<div class="mb-4 text-center">
			<h4 class="mb-2 text-lg font-semibold text-gray-800">Get to know Jukka and Anna</h4>
		</div>
		<div class="relative">
			<iframe
				class="w-full rounded-xl shadow-lg md:aspect-video"
				style="aspect-ratio: 9/16;"
				width="100%"
				src="https://www.youtube.com/embed/Vx7Wm4mq9Qw?si=2_LukWGlPQeiNVja&modestbranding=1&showinfo=0"
				title="Meet Your Teachers - Jukka and Anna"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		</div>
	</div>

	<section class="space-y-12">
		<Introduction imgSrc={jukka} imgAlt="Jukka" name="Jukka Välimaa" alwaysExpanded>
			<p class="mb-2">
				Jukka is the main organizer for Zouk Zero to Hero. He started learning Brazilian Zouk in
				2010, never stopped, and does not intend to stop. The craft and the art of the dance - and
				of teaching the dance - is endlessly fascinating to him.
			</p>
			<p class="mb-2">
				His main teachers have been Freddy and Andressa, and he taught for many years at Helsinki
				Dance Central. He teaches mostly in Helsinki, but has also taught in many other European
				countries over the years.
			</p>
		</Introduction>

		<Introduction imgSrc={anna} imgAlt="Anna" name="Anna Zahrmann" alwaysExpanded>
			<p class="mb-2">
				Anna caught the Brazilian Zouk bug in 2020 (thanks, Jukka and Kristina!) — and quickly found
				herself hooked. Inspired by the creativity and freedom the dance offers, what began as a
				hobby soon grew into a deep passion. She started her journey learning from Jukka & Kristina
				and Freddy & Andressa, and later traveled across Europe to study with top international
				teachers and immerse herself in the global Zouk community.
			</p>
			<p class="mb-2">
				Over time, Anna transitioned from student to assistant, and now teaches and organizes events
				in the local Zouk scene.
			</p>
		</Introduction>
	</section>
</Modal>

<!-- Zouk'o'Saturdays Accordion
<Accordion
	title="Do I need to go to all the included Saturdays?"
	analyticsEvent="ZoukSaturdaysAccordionOpen"
>
	<p class="mb-2 text-lg">
		No. You don't have to attend all the
		<a href="/zouk-o-saturday" target="_blank" rel="noopener" class="underline">Zouk'o'Saturdays</a
		>. They are included, but how many you attend is up to you.
	</p>

	<p class="text-lg">
		That said, we encourage you to go to as many as you can! When learning a new skill, the more
		practice you get, the better. Also, our money-back guarantee only applies if you attend at least
		two of them.
	</p>
</Accordion> -->

<!-- Can I benefit Accordion -->
<Accordion
	title="I've attended many Brazilian Zouk drop-in classes already. Can I benefit from this course?"
	analyticsEvent="CanIBenefitAccordionOpen"
>
	<p class="mb-2 text-lg">
		Yes. Drop-in classes can be great for getting a feel for the dance, but they don't usually go
		deep into details or technique.
	</p>
	<p class="mb-2 text-lg">
		Usually, when we teach introductory drop-in classes, we teach enough basics for people to get
		by, but there is no time to go deep. It's not that we wouldn't like to, but we have to move fast for
		the class to fit everyone.
	</p>

	<p class="mb-2 text-lg">
		In this course, we will work not only on teaching you enough basics to dance, but also on making
		those basics work as well possible. This will improve your dance more in the short
		and long run than just collecting new moves.
	</p>
	<p class="text-lg">
		You may want to check out this article by Jukka that went viral in the global Zouk community more than 10 years ago:
		<a
			href="https://zouksidedown.wordpress.com/2014/04/20/zouk-back-to-basics/"
			target="_blank"
			rel="noopener"
			class="underline"
		>
			Zouk: Back to Basics (2014)
		</a>
	</p>
</Accordion>

<!-- Contact Information -->
<p class="mb-4 text-center text-gray-600">
	Any more questions? Contact us at
	<a href="mailto:jukka@zoukzerotohero.com" class="underline">via email</a>
	or
	<a
		href="https://www.facebook.com/profile.php?id=61551733333069"
		target="_blank"
		rel="noopener"
		class="underline">with Facebook Messenger</a
	>.
</p>

<div
	class="mb-24 rounded-xl border border-green-200 bg-gradient-to-r from-green-50 to-blue-50 p-8 text-center md:mb-12"
>
	<div class="mb-6 text-center"></div>
	<p class="mb-2 text-3xl font-bold text-green-800">🙌 See you in class! 🙌</p>
</div>

<!-- Sticky mobile CTA -->
<div
	class="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden"
>
	<div class="mx-auto flex max-w-xl items-center justify-center p-3">
		<button
			disabled
			class="w-full rounded-full bg-gradient-to-r from-gray-400 to-gray-500 px-6 py-3 text-center text-sm font-bold text-white shadow-md cursor-not-allowed opacity-60"
		>
			Registration will open soon
		</button>
	</div>
</div>
