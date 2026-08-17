<script lang="ts">
    import Button from '$lib/components/Button.svelte';
	import { iceCream } from '$lib/data/icecream';
	import { milkshakes } from '$lib/data/milkshakes';
	import { cakes } from '$lib/data/cakes';
	import { desserts } from '$lib/data/desserts';
</script>

<section class="bg-cream">
	<div class="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:py-16">

		<div>
			<p class="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-berry">
				Welcome to Melt
			</p>

			<h1 class="max-w-xl text-5xl font-bold leading-tight text-chocolate sm:text-6xl lg:text-7xl">
				Sweet moments.
				<span class="block text-berry">Made to melt.</span>
			</h1>

			<p class="mt-6 max-w-lg text-base leading-7 text-chocolate/70 sm:text-lg">
				Creamy ice creams, dreamy milkshakes, beautiful cakes and delicious
				desserts made for every sweet moment.
			</p>

			<div class="mt-8 flex flex-col gap-4 sm:flex-row">
				<button
					class="rounded-full bg-berry px-7 py-3 text-center text-sm font-semibold text-vanilla transition-transform duration-300 hover:scale-105"
				>
					Discover Something Sweet!
			</button>

			<Button
	             href="/menu"
	             text="Explore Menu"
	             variant="outline"
            />
			</div>
		</div>

		<div class="flex justify-center md:justify-end">
			<img
				src="/images/hero/first.jpg"
				alt="Melt ice cream"
				class="h-96 w-full max-w-md rounded-3xl object-cover transition-transform duration-500 hover:scale-105 sm:h-96 md:h-128"
			/>
		</div>

	</div>
</section>

<section class="bg-vanilla py-20">
	<div class="mx-auto max-w-7xl px-6">
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Our favorites
			</p>

			<h2 class="mt-3 text-4xl font-bold text-chocolate sm:text-5xl">
				A little scoop of happiness.
			</h2>

			<p class="mx-auto mt-4 max-w-2xl text-chocolate/70">
				Discover some of our most-loved flavors, made fresh for every sweet
				moment.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each iceCream.slice (0, 3) as flavor}
				<div class="group overflow-hidden rounded-3xl border border-pink bg-cream shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
                >
                <div class="overflow-hidden">
					<img
						src={flavor.image}
						alt={flavor.name}
						class="h-96 w-full rounded-3xl object-cover"
					/>
        </div>
<div class="p-6">
				<h3 class="text-xl font-bold text-chocolate">
					{flavor.name}
				</h3>

				<p class="mt-2 text-sm leading-6 text-chocolate/70">
					{flavor.description}
				</p>

				<div class="mt-5 flex items-center justify-between">
					<p class="font-semibold text-berry">
						KES {flavor.price}
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>
<div class="mt-10 text-center">
	  <Button
	  href="/menu#ice-cream"
	  text="Explore Ice Cream"
      />
		</div>

	</div>
</section>

<section class="bg-pink py-20">
	<div class="mx-auto max-w-7xl px-6">

		<!-- Heading -->
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Made to make you smile
			</p>

			<h2 class="mt-3 text-4xl font-bold text-chocolate sm:text-5xl">
				Milkshakes made with love.
			</h2>

			<p class="mx-auto mt-4 max-w-2xl text-chocolate/70">
				Thick, creamy and loaded with goodness. Find your perfect shake.
			</p>
		</div>

		<!-- 3 featured milkshakes -->
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each milkshakes.slice(0, 3) as shake}
			<div
			   class="group overflow-hidden rounded-3xl bg-vanilla shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
				>
			<div class="overflow-hidden">
			  <img
				src={shake.image}
				alt={shake.name}
				class="h-135 w-full object-cover transition-transform duration-500 group-hover:scale-105"
				  />
			</div>

			<div class="p-6">
				<h3 class="text-xl font-bold text-chocolate">
					{shake.name}
				</h3>

			<p class="mt-2 text-sm leading-6 text-chocolate/70">
				{shake.description}
			</p>

			<p class="mt-5 font-semibold text-berry">
				KES {shake.price}
			</p>
			</div>
				</div>
			{/each}
		</div>

		<!-- Explore button -->
		<div class="mt-10 text-center">
	    <Button
	        href="/menu#milkshakes"
	        text="Explore Milkshakes"
	        variant="chocolate"
         />
		</div>

	</div>
</section>

<section class="bg-vanilla py-20">
	<div class="mx-auto max-w-7xl px-6">

		<!-- Heading -->
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Baked with love
			</p>

			<h2 class="mt-3 text-4xl font-bold text-chocolate sm:text-5xl">
				Cakes for every celebration.
			</h2>

			<p class="mx-auto mt-4 max-w-2xl text-chocolate/70">
				Beautifully baked cakes made to make every celebration a little sweeter.
			</p>
		</div>

		<!-- 3 featured cakes -->
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each cakes.slice(0, 3) as cake}
				<div
					class="group overflow-hidden rounded-3xl bg-cream shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
				>
			<div class="overflow-hidden">
			<img
				src={cake.image}
				alt={cake.name}
				class="h-96 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			<div class="p-6">
			<h3 class="text-xl font-bold text-chocolate">
				{cake.name}
			</h3>

			<p class="mt-2 text-sm leading-6 text-chocolate/70">
				{cake.description}
			</p>

			<p class="mt-5 font-semibold text-berry">
				KES {cake.price}
			</p>
			</div>
			   </div>
			{/each}
		</div>

		<!-- Explore button -->
		<div class="mt-10 text-center">
			<Button
		href="/menu#cakes"
		text="Explore Cakes"
	/>
		</div>

	</div>
</section>

<section class="bg-pink py-20">
	<div class="mx-auto max-w-7xl px-6">

		<!-- Heading -->
		<div class="mb-12 text-center">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Something sweet
			</p>

			<h2 class="mt-3 text-4xl font-bold text-chocolate sm:text-5xl">
				A little extra sweetness.
			</h2>

			<p class="mx-auto mt-4 max-w-2xl text-chocolate/70">
				Delicious little treats made for those moments when you deserve
				something sweet.
			</p>
		</div>

		<!-- 3 featured desserts -->
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each desserts.slice(0, 3) as dessert}
				<div
					class="group overflow-hidden rounded-3xl bg-vanilla shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg"
				>
					<div class="overflow-hidden">
						<img
							src={dessert.image}
							alt={dessert.name}
							class="h-96 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
						/>
					</div>

					<div class="p-6">
						<h3 class="text-xl font-bold text-chocolate">
							{dessert.name}
						</h3>

						<p class="mt-2 text-sm leading-6 text-chocolate/70">
							{dessert.description}
						</p>

						<p class="mt-5 font-semibold text-berry">
							KES {dessert.price}
						</p>
					</div>
				</div>
			{/each}
		</div>

		<!-- Explore button -->
		<div class="mt-10 text-center">
			<Button
	        href="/menu#desserts"
	        text="Explore Desserts"
	        variant="chocolate"
             />
			
		</div>

	</div>
</section>