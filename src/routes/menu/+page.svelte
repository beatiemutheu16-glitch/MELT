<script lang="ts">
import { iceCream } from '$lib/data/icecream';
import { milkshakes } from '$lib/data/milkshakes';
import { cakes } from '$lib/data/cakes';
import { desserts } from '$lib/data/desserts';
import Button from '$lib/components/Button.svelte';
import AddToCart from '$lib/components/AddToCart.svelte';
import ProductCard from '$lib/components/ProductCard.svelte';
</script>

<svelte:head>
	<title>Menu | Melt</title>
	<meta
		name="description"
		content="Explore Melt's collection of ice cream, milkshakes, cakes and desserts."
	/>
</svelte:head>

<section class="bg-cream py-20 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-10">
		<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

			<!-- Menu hero text -->
			<div>
				<p class="mb-5 text-sm font-semibold uppercase tracking-widest text-berry">
					The Melt Menu
				</p>

				<h1 class="max-w-2xl text-5xl font-bold leading-tight text-chocolate sm:text-6xl lg:text-7xl">
					Something sweet
					<span class="block text-berry">for every mood.</span>
				</h1>

				<p class="mt-6 max-w-xl text-base leading-7 text-chocolate/70 sm:text-lg">
					From creamy scoops and dreamy milkshakes to celebration cakes
					and irresistible desserts, discover something made just for you.
				</p>

				<div class="mt-8 flex flex-wrap gap-4">
				<Button
	               href="#ice-cream"
	               text="Explore Menu"
                />

					<div class="flex items-center gap-2 px-3 py-3 text-sm font-medium text-chocolate">
						<i class="ri-heart-3-line text-lg text-berry"></i>
						Made with love
					</div>
				</div>

				<!-- Menu categories -->
				<div class="mt-12 grid grid-cols-2 gap-6 border-t border-chocolate/10 pt-8 sm:grid-cols-4">
					<div>
						<i class="ri-heart-3-line text-xl text-berry"></i>
						<p class="mt-2 text-sm font-semibold text-chocolate">
							Ice Cream
						</p>
					</div>

					<div>
						<i class="ri-cup-line text-xl text-berry"></i>
						<p class="mt-2 text-sm font-semibold text-chocolate">
							Milkshakes
						</p>
					</div>

					<div>
						<i class="ri-cake-3-line text-xl text-berry"></i>
						<p class="mt-2 text-sm font-semibold text-chocolate">
							Cakes
						</p>
					</div>

					<div>
						<i class="ri-cake-line text-xl text-berry"></i>
						<p class="mt-2 text-sm font-semibold text-chocolate">
							Desserts
						</p>
					</div>
				</div>
			</div>

			<!-- Menu hero image -->
			<div class="relative">
				<div class="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-pink/50 blur-2xl"></div>

				<div class="relative overflow-hidden rounded-2xl">
					<img
						src="/images/ice-cream/sundae.jpg"
						alt="Melt ice cream"
						class="h-96 w-full object-cover sm:h-128 lg:h-160"
					/>
				</div>

				<div class="absolute bottom-6 left-6 rounded-2xl bg-vanilla/95 p-5 shadow-lg backdrop-blur-sm">
					<p class="text-xs uppercase tracking-widest text-chocolate/60">
						Welcome to Melt
					</p>

					<p class="mt-1 font-bold text-chocolate">
						Your sweetest destination
					</p>
				</div>
			</div>

		</div>
	</div>
</section> 

<section id="ice-cream" class="bg-pink py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-10">

		<div class="mb-10">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Scoop into happiness
			</p>

			<h2 class="mt-2 text-4xl font-bold text-chocolate sm:text-5xl">
				Ice Cream
			</h2>

			<p class="mt-4 max-w-xl text-chocolate/70">
				Creamy, dreamy scoops made for every kind of craving.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each iceCream as item}
				<ProductCard item={item} />
			{/each}
		</div>

	</div>
</section>

<section id="milkshakes" class="bg-vanilla py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-10">

		<div class="mb-10">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Sip something sweet
			</p>

			<h2 class="mt-2 text-4xl font-bold text-chocolate sm:text-5xl">
				Milkshakes
			</h2>

			<p class="mt-4 max-w-xl text-chocolate/70">
				Creamy, indulgent shakes blended with delicious flavours.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each milkshakes as item}
				<ProductCard
				 item={item}
				 imageHeight="h-130"
				 cardBackground="bg-cream"
				  />
			{/each}
		</div>

	</div>
</section>

<section id="cakes" class="bg-pink py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-10">

		<div class="mb-10">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Baked with love
			</p>

			<h2 class="mt-2 text-4xl font-bold text-chocolate sm:text-5xl">
				Cakes
			</h2>

			<p class="mt-4 max-w-xl text-chocolate/70">
				Beautiful cakes made for birthdays, celebrations and every sweet moment.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each cakes as item}
				<ProductCard
				 item={item}
				 imageHeight="h-100" 
				 cardBackground="bg-cream"
				  />
				 
			{/each}
		</div>

	</div>
</section>

<section id="desserts" class="bg-vanilla py-20 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-10">

		<div class="mb-10">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Save room for dessert
			</p>

			<h2 class="mt-2 text-4xl font-bold text-chocolate sm:text-5xl">
				Desserts
			</h2>

			<p class="mt-4 max-w-xl text-chocolate/70">
				Delicious little treats made to finish your Melt experience perfectly.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each desserts as item}
				<ProductCard 
				item={item}
				imageHeight="h-100"
		        cardBackground="bg-cream"
				 />
			{/each}
		</div>

	</div>
</section>

