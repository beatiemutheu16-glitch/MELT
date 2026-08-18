<script lang="ts">
	import { cart } from '$lib/stores/cart';
	let subtotal = $derived(
		$cart.reduce((total, item) => total + item.price*item.quantity, 0)
	);
</script>

<svelte:head>
	<title>Cart | Melt</title>
	<meta
		name="description"
		content="View the sweet treats you've selected from Melt."
	/>
</svelte:head>

<section class="min-h-screen bg-pink px-6 py-10 sm:py-16">
	<div class="mx-auto max-w-4xl">
	<a
			href="/menu"
			class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-chocolate transition-colors hover:text-berry"
		>
			<i class="ri-arrow-left-line text-lg"></i>
			Back to Menu
		</a>

		<div class="mb-2">
			<p class="text-sm font-semibold uppercase tracking-widest text-berry">
				Melt treats
			</p>

			<h1 class="mt-3 text-5xl font-bold text-chocolate sm:text-5xl">
				Your Cart
			</h1>

			<p class="mt-4 text-chocolate/70">
				Your sweetest picks, all in one place.
			</p>
		</div>

		{#if $cart.length === 0}
			<div class="mt-10 rounded-3xl bg-vanilla p-10 text-center">
				<i class="ri-shopping-basket-line text-5xl text-berry"></i>

				<h2 class="mt-4 text-2xl font-bold text-chocolate">
					Your cart is empty
				</h2>

				<p class="mt-2 text-chocolate/60">
					Go pick something delicious from our menu.
				</p>
			</div>

		{:else}
			<div class="mt-10  space-y-5">
		{#each $cart as item}
			<div class="flex w-full flex-col items-center gap-5 rounded-3xl bg-vanilla p-4 shadow-sm sm:flex-row sm:items-center sm:gap-5">

				<img
					src={item.image}
					alt={item.name}
					class="h-24 w-24 shrink-0 rounded-2xl object-cover"
				/>

				<div class="min-w-0 flex-1">
					<h2 class="text-lg font-bold text-chocolate">
						{item.name}
					</h2>

					<p class="mt-1 text-sm text-chocolate/60">
						{item.description}
					</p>

					<p class="mt-2 font-bold text-berry">
						KSh {item.price}
					</p>
				</div>

				<div class="flex shrink-0 items-center gap-3">

    <!-- Minus -->
    <button
    type="button"
    onclick={() =>
        cart.update((items) =>
            items.map((cartItem) =>
                cartItem === item && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            )
        )
    }
    class="flex h-8 w-8 items-center justify-center rounded-full bg-pink font-bold text-chocolate transition hover:bg-berry hover:text-vanilla"
>
    −
</button>
    <!-- Quantity -->
    <span class="min-w-5 text-center font-semibold text-chocolate">
        {item.quantity}
    </span>

    <!-- Plus -->
   <button
    type="button"
    onclick={() =>
        cart.update((items) =>
            items.map((cartItem) =>
                cartItem === item
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        )
    }
    class="flex h-8 w-8 items-center justify-center rounded-full bg-pink font-bold text-chocolate transition hover:bg-berry hover:text-vanilla"
>
    +
</button>

    <!-- Remove -->
    <button
        onclick={() =>
            cart.update((items) =>
                items.filter((cartItem) => cartItem !== item)
            )
        }
        class="rounded-full bg-pink px-4 py-2 text-sm font-semibold text-chocolate transition hover:bg-berry hover:text-vanilla"
    >
        Remove
    </button>

</div>

			</div>
		{/each}
	</div>
	<div class="mt-8 flex items-center justify-between border-t border-chocolate/10 pt-6">
		<span class="text-lg font-semibold text-chocolate">
			Subtotal
		</span>

		<span class="text-xl font-bold text-berry">
			KSh {subtotal}
		</span>
	</div>
<a
    href="/checkout"
    class="mt-6 block w-full rounded-full bg-berry px-6 py-3 text-center font-semibold text-vanilla transition-all duration-300 hover:-translate-y-1"
>
    Order Now
</a>
{/if}

	</div>
</section>