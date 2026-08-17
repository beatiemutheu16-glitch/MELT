<script lang="ts">
	let menuOpen = $state(false);
	import { cart } from '$lib/stores/cart';
</script>

<nav class="sticky top-0 z-50 border-b border-pink bg-cream">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

		<a href="/" class="text-3xl font-bold tracking-tight text-chocolate">
			MELT.
		</a>

		<!-- Desktop navigation -->
		<div class="hidden items-center gap-8 md:flex">
			<a href="/" class="text-sm font-medium text-chocolate transition-colors duration-300 hover:text-berry">
				Home
			</a> 
			<a
	          href="/menu"
	          class="text-sm font-medium text-chocolate transition-colors duration-300 hover:text-berry"
               >
	           Menu
           </a>

			<a href="/about" class="text-sm font-medium text-chocolate transition-colors duration-300 hover:text-berry">
				About
			</a>

			<a href="/contact" class="text-sm font-medium text-chocolate transition-colors duration-300 hover:text-berry">
				Contact
			</a>
		</div>

		<div class="flex items-center gap-3">

			<a
	href="/cart"
	class="relative inline-flex items-center rounded-full bg-berry px-5 py-2 text-sm font-semibold text-vanilla transition-transform duration-300 hover:scale-105"
>
	<i class="ri-shopping-cart-line text-lg"></i>
	Cart

	{#if $cart.length > 0}
		<span
			class="absolute -right-1 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-chocolate px-1 text-xs font-bold text-vanilla"
		>
			{$cart.length}
		</span>
	{/if}
</a>

			<!-- Mobile menu button -->
			<button
				type="button"
				class="text-2xl text-chocolate md:hidden"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label="Toggle navigation menu"
			>
				{menuOpen ? '✕' : '☰'}
			</button>

		</div>
	</div>

	<!-- Mobile navigation -->
	{#if menuOpen}
		<div class="border-t border-pink px-6 py-5 md:hidden">
			<div class="flex flex-col gap-5">

				<a href="/" class="text-sm font-medium text-chocolate hover:text-berry">
					Home
				</a>

				<a href="/menu" class="text-sm font-medium text-chocolate hover:text-berry">
	               Menu
                </a>

				<a href="/about" class="text-sm font-medium text-chocolate hover:text-berry">
					About
				</a>

				<a href="/contact" class="text-sm font-medium text-chocolate hover:text-berry">
					Contact
				</a>

			</div>
		</div>
	{/if}
</nav>