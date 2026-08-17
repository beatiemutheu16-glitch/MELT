<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>About | Melt</title>
	<meta
		name="description"
		content="Learn more about Melt, your sweet treat shop."
	/>
</svelte:head>




<section class="bg-vanilla  px-6 py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

		
		<div>
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				About Melt
			</p>
            
			<h1 class="mt-5 text-5xl font-bold leading-tight text-chocolate sm:text-6xl">
				More than just a
				<span class="text-berry">sweet treat.</span>
			</h1>

			<p class="mt-6 max-w-lg text-lg leading-8 text-chocolate/70">
				MELT brings together ice cream, cakes, and desserts made
				for sharing, celebrating, and enjoying the little moments
				in between.
			</p>

		</div>

		<div class="flex justify-center lg:justify-end">
			<img
				src="/images/about/icon.2.png"
				alt="Melt"
				class="w-full max-w-lg object-contain"
			/>
		</div>

	</div>
</section>

<section class="bg-cream px-6 py-20">
	<div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

		<!-- Image -->
		<div class="flex justify-center lg:justify-end">
			<img
				src="/images/about/dessert.jpg"
				alt="Delicious Melt dessert"
				class="w-full max-w-lg rounded-3xl object-cover"
			/>
		</div>

		<!-- Story teaser -->
		<div>
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				The Beggining
			</p>

			<h2 class="mt-5 text-5xl font-bold leading-tight text-chocolate sm:text-6xl">
				It all started with a
				<span class="text-berry">simple idea.</span>
			</h2>

			<p class="mt-6 max-w-lg text-lg leading-8 text-chocolate/70">
				MELT began with a love for creating delicious treats and
				a dream of bringing people together over something they
				could enjoy, share, and remember.
			</p>

	<Button
	  href="/our-story"
	  text="Read Our Story"
      />
		</div>

	</div>
</section>