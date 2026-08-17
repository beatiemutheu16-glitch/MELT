<script lang="ts">
	import { cart } from '$lib/stores/cart';

	let { item }: { item: any } = $props();
</script>

<button
	onclick={() => cart.update((items) => [...items, { ...item, quantity: 1 }])}
	class="flex items-center gap-2 rounded-full bg-berry px-4 py-2 text-sm font-semibold text-vanilla transition-all duration-300 hover:bg-chocolate"
>
	<i class="ri-shopping-cart-line"></i>
	Add to Cart
</button>