<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>
<svelte:head>
	<title>Our Story | Melt</title>
	<meta
		name="description"
		content="Discover the story behind Melt and the sweet moments that inspired us."
	/>
</svelte:head>

<section class="bg-cream px-6 py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

		<!-- Text -->
		<div>
		<p class="font-semibold uppercase tracking-widest text-berry">
				The Story Behind Melt
			</p>
			<h1 class="mt-4 text-5xl font-bold leading-tight text-chocolate md:text-6xl">
				Where the sweetest
				<span class="text-berry">moments</span>
				begin.
			</h1>

			<p class="mt-6 max-w-xl text-lg leading-8 text-chocolate/70">
				Every sweet thing has a story. Discover the people, passion,
				and little moments that brought Melt to life.
			</p>
		</div>

		<!-- Image -->
		<div class="overflow-hidden rounded-3xl">
			<img
				src="/images/about/melts.2.png"
				alt="Inside the Melt dessert shop"
				class="w-full"
			/>
		</div>

	</div>
</section>

<section class="bg-vanilla px-6 py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

		<!-- Image -->
		<div class="overflow-hidden rounded-3xl">
			<img
				src="/images/about/image.2.jpg"
				alt="Melt desserts"
				class="w-full"
			/>
		</div>

		<!-- Story -->
		<div>
			<p class="font-semibold uppercase tracking-widest text-berry">
				Our Story
			</p>

			<h2 class="mt-4 text-4xl font-bold leading-tight text-chocolate md:text-5xl">
				It all started with a
				<span class="text-berry"> simple idea.</span>
			</h2>

			<p class="mt-6 text-lg leading-8 text-chocolate/70">
				Melt began with a simple idea — to create delicious treats
				that bring people together and turn ordinary moments into
				something worth remembering.
			</p>

			<p class="mt-4 text-lg leading-8 text-chocolate/70">
				From creamy scoops to beautifully crafted cakes and desserts,
				every creation is made with care, creativity, and a little
				something sweet.
			</p>

			<p class="mt-4 text-lg leading-8 text-chocolate/70">
		What started as a love for creating delicious treats grew
		into a space where ice cream, cakes, and desserts could
		all come together under one roof.
	      </p>
		</div>

	</div>
</section>

<section class="bg-cream px-6 py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

		<!-- Text -->
		<div>
			<p class="font-semibold uppercase tracking-widest text-berry">
				More Than Ice Cream
			</p>

			<h2 class="mt-4 text-4xl font-bold leading-tight text-chocolate md:text-5xl">
				Sweetness comes in
				<span class="text-berry">many forms.</span>
			</h2>

			<p class="mt-6 text-lg leading-8 text-chocolate/70">
				At Melt, there's more than one way to satisfy your sweet tooth.
				From creamy ice cream to beautifully crafted cakes and delicious
				desserts, there's something for every kind of sweet moment.
			</p>

			<p class="mt-4 text-lg leading-8 text-chocolate/70">
				Whether you're celebrating something special or simply treating
				yourself, we believe every moment deserves a little sweetness.
			</p>
		</div>

		<!-- Image -->
		<div class="overflow-hidden rounded-3xl">
			<img
				src="/images/about/Design.2.png"
				alt="Melt ice cream and desserts"
				class="w-full"
			/>
		</div>

	</div>
</section>

<section class="bg-vanilla px-6 py-20">
	<div class="mx-auto max-w-7xl">

		<!-- Section heading -->
		<div class="mx-auto max-w-2xl text-center">
			<p class="font-semibold uppercase tracking-widest text-berry">
				What We Believe
			</p>

			<h2 class="mt-4 text-4xl font-bold text-chocolate md:text-5xl">
				Sweet things should feel special.
			</h2>

			<p class="mt-5 text-lg leading-8 text-chocolate/70">
				At Melt, we believe the little things matter — from the
				ingredients we choose to the moments our treats become part of.
			</p>
		</div>

		<!-- Value cards -->
<div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">

	<!-- Quality -->
	<div class="mx-auto w-full max-w-sm rounded-3xl bg-pink p-8 text-center lg:max-w-none">
		<i class="ri-heart-3-line text-4xl text-chocolate"></i>

		<h3 class="mt-5 text-2xl font-bold text-chocolate">
			Quality
		</h3>

		<p class="mt-3 leading-7 text-chocolate/70">
			We care about every ingredient, every detail, and every
			treat that leaves our kitchen.
		</p>
	</div>

	<!-- Creativity -->
	<div class="mx-auto w-full max-w-sm rounded-3xl bg-pink p-8 text-center lg:max-w-none">
		<i class="ri-magic-line text-4xl text-chocolate"></i>

		<h3 class="mt-5 text-2xl font-bold text-chocolate">
			Creativity
		</h3>

		<p class="mt-3 leading-7 text-chocolate/70">
			From cakes to scoops, we love turning simple ideas into
			something delicious and beautiful.
		</p>
	</div>

	<!-- Joy -->
	<div class="mx-auto w-full max-w-sm rounded-3xl bg-pink p-8 text-center lg:max-w-none">
		<i class="ri-emotion-happy-line text-4xl text-chocolate"></i>

		<h3 class="mt-5 text-2xl font-bold text-chocolate">
			Joy
		</h3>

		<p class="mt-3 leading-7 text-chocolate/70">
			Because the best desserts aren't just about taste —
			they're about the moments and memories they create.
		</p>
	</div>

</div>
</section>
<section class="bg-cream px-6 py-20">
	<div class="mx-auto max-w-3xl text-center">

		<p class="font-semibold uppercase tracking-widest text-berry">
			A Little Something Sweet
		</p>

		<h2 class="mt-4 text-4xl font-bold leading-tight text-chocolate md:text-5xl">
			Ready for something
			<span class="text-berry">sweet?</span>
		</h2>

		<p class="mx-auto mt-5 max-w-xl text-lg leading-8 text-chocolate/70">
			Explore our menu and find your next favorite treat.
		</p>

		<div class="mt-8">
			<Button
				href="/menu"
				text="Explore Our Menu"
			/>
		</div>

	</div>
</section>