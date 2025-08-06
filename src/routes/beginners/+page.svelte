<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import partner_pose_landscape from '$lib/assets/images/partner_pose_landscape.jpg';
	import partner_pose_portrait from '$lib/assets/images/partner_pose_portrait.jpg';
	let accordionOpen = $state(false);
</script>

<svelte:head>
	<title>Zero to Zouk - Brazilian Zouk Beginner Course</title>
	<meta property="og:title" content="Zero to Zouk - Brazilian Zouk Beginner Course" />
	<meta property="og:description" content="Learn to social dance in 6 weeks. Monday evenings starting 1.9., no partner needed." />
	<meta property="og:url" content="https://zoukzerotohero.com/beginners" />
	<meta property="og:image" content={partner_pose_landscape} />
</svelte:head>

<div class="grid grid-cols-12">
	<div class="col-span-12 md:col-span-8 md:col-start-3">
		<h1 class="mb-4 text-2xl font-bold md:text-4xl">
			From Zero to Zouk &mdash; Brazilian Zouk Beginner Course
		</h1>

		<h2 class="mb-4 text-xl font-bold md:text-2xl">
			Learn to Social Dance in 6 Weeks &mdash; Even If You've Never Danced Before
		</h2>

		<p class="mb-4">
			Have you ever seen Brazilian Zouk or another couple dance and thought, "That looks amazing...
			but I could never do that"?
		</p>

		<p class="mb-4">We're here to prove you wrong&mdash;in the best way.</p>

		<div class="flex flex-col items-center">
			<img
				src={partner_pose_portrait}
				alt="Jukka and Anna"
				class="mt-4 h-auto w-full md:w-3/4 rounded-lg shadow-lg"
			/>
			<p class="mt-2 text-center text-sm">Jukka and Anna &mdash; course teachers</p>
		</div>

		<p class="mt-4">
			Whether you're a complete beginner, have some experience but social dancing is still a
			challenge or a dancer from another style, this course is designed to get you confidently
			social dancing in just six weeks. No partner needed. No previous experience required. Just
			curiosity, a willingness to try, and a bit of consistency.
		</p>

		<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">🎁 What You'll Get</h2>

		<ul>
			<li><b>6 structured weekly classes</b> (1.5 hours each, Mondays)</li>
			<li>
				<a href="/zouk-o-saturday">Zouk'o'Saturdays included</a> &mdash; 5 Saturday socials with
				drop-in classes and social dancing happen during the course run. You can attend as many of
				these as you want.
			</li>
			<li><b>Recap & practice videos</b> after each class so you never fall behind</li>
			<li>Bonus <b>solo practice materials</b> to improve at home, at your pace</li>
			<li><b>Rotating partners</b> &mdash; you don’t need to bring your own</li>
			<li><b>Inclusive, welcoming community</b> (and a WhatsApp group to stay connected)</li>

			<li><b>Personalized feedback & confidence-building</b></li>
			<li>Clear guidance on <b>how to start actually dancing at parties</b></li>
			<li>
				<b>Money-back guarantee</b>&mdash;if you show up, do the work, and still don't feel able to
				dance socially, we'll refund you in full. Just let us know how we can improve.
			</li>
		</ul>

		<div class="mt-8 text-center">
			<button
				onclick={() => document.getElementById('ready-to-join')?.scrollIntoView({ behavior: 'smooth' })}
				class="rounded-md bg-green-500 px-8 py-4 text-xl font-medium text-white transition-colors duration-200 hover:bg-green-600"
			>
				🎉 Sign me up!
			</button>
		</div>

		<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">🙋 Who It's For</h2>

		<ul>
			<li>Total beginners with no dance experience</li>
			<li>Social dancers from other styles (salsa, bachata, tango…)</li>
			<li>Anyone wanting to improve confidence, movement, and connection</li>
			<li>People looking for a fun, low-pressure way to meet others</li>
			<li>Those tired of “screen time” and looking to move their body in real life</li>
		</ul>

		<p class="mt-4">
			We believe partner dance—and Brazilian Zouk in particular—is more than just steps. It's about
			connection, expression, and community.
		</p>
		<p>
			This course is our way of bringing people together, inviting new people into our dance scene,
			and doing things differently.
		</p>

		<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">🗓️ Course Details</h2>

		<ul>
			<li><b>Start date:</b> Monday, September 1st</li>
			<li><b>Location:</b> Helsinki Dance Central, Sörnäisten Rantatie 33 C, 4th Floor</li>
			<li><b>Teachers:</b> Jukka & Anna</li>
			<li><b>Duration:</b> 6 weeks</li>
			<li><b>Time:</b> Mondays, 18:00-19:30</li>
			<li>
				<b>Includes:</b> 5 optional <a href="/zouk-o-saturday">Zouk'o'Saturdays</a> during the course run
			</li>
		</ul>

		<h2 class="mt-8 mb-4 text-xl font-bold md:text-2xl">💰 Pricing & Value</h2>
		<p class="mb-4">We've packed this course with a ton of value:</p>

		<ul class="mb-4">
			<li>You get: All the things listed above, including</li>
			<li>
				<ul>
					<li>9 hours of course classes on Mondays</li>
					<li>
						15 extra <a href="/zouk-o-saturday">Zouk'o'Saturday</a> hours of drop-in classes and social
						dancing
					</li>
				</ul>
			</li>
			<li>Course price:</li>
			<ul>
				<li>Regular: early bird price <b>€280</b> until Sun 10.8, after that <b>€300</b></li>
				<li>Youth price (26 years old or less): early bird price <b>€240</b>, after that <b>€260</b></li>
			</ul>
		</ul>

		<hr class="my-8" />

		<h2 id="ready-to-join" class="mb-4 text-xl font-bold md:text-2xl">🔗 Ready to Join?</h2>

		<p class="mb-2">Make this the moment you finally start dancing.</p>
		<p class="mb-8">
			Join the course, show up, and if it's not working for you&mdash;we'll make it right.
		</p>

		<div class="flex max-w-md flex-col gap-4 text-xl">
			<a
				href="https://holvi.com/shop/zoukzerotohero/product/4a08997da8a56995f96a05afc1966fe4/"
				class="rounded-md bg-blue-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-600"
				>👉 Register Now - leader</a
			>

			<a
				href="https://holvi.com/shop/zoukzerotohero/product/d9d2beb1cd72ca822f2bf2c971a77a43/"
				class="rounded-md bg-blue-500 px-6 py-3 text-center font-medium whitespace-nowrap text-white transition-colors duration-200 hover:bg-blue-600"
				>👉 Register Now - follower</a
			>
		</div>

		<!-- Leader/Follower Accordion -->
		<div class="mt-8 mb-8 rounded-lg border border-gray-200">
			<button
				onclick={() => (accordionOpen = !accordionOpen)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						accordionOpen = !accordionOpen;
					}
				}}
				class="flex w-full items-center justify-between rounded-t-lg bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
				tabindex="0"
				aria-expanded={accordionOpen}
			>
				<h3 class="text-lg font-semibold">Leader? Follower? What are those?</h3>
				<div
					class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-700"
				>
					<span class="text-sm font-bold">{accordionOpen ? '-' : '+'}</span>
				</div>
			</button>

			{#if accordionOpen}
				<div class="border-t border-gray-200 p-4">
					<p class="mb-3">
						In partner dances like Brazilian Zouk, there are two roles that work together to create
						the dance: leader and follower.
					</p>
					<p>
						Traditionally, the leader has been a man and the follower a woman. But nowadays, it's
						not that unusual for a woman to dance as a leader or a man to dance as a follower. Feel
						free to register as either role, regardless of your gender.
					</p>
				</div>
			{/if}
		</div>

		<p class="mt-8 mb-8 text-2xl font-bold">🙌 See you in class! 🙌</p>
	</div>
</div>
