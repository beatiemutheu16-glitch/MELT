<script lang="ts">
	import AddToCart from '$lib/components/AddToCart.svelte';

    let {
		item,
		imageHeight = 'h-72',
		cardBackground = 'bg-vanilla'
	}: {
		item: any;
		imageHeight?: string;
		cardBackground?: string;
	} = $props();
</script>
<div class={`overflow-hidden rounded-3xl ${cardBackground} shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-lg`}>
	<img
		src={item.image}
		alt={item.name}
		class={`${imageHeight} w-full object-cover`}
	/>

	<div class="p-5">
		<h3 class="text-xl font-bold text-chocolate">
			{item.name}
		</h3>

		<p class="mt-2 text-sm leading-6 text-chocolate/70">
			{item.description}
		</p>

		<div class="mt-5 flex items-center justify-between">
			<p class="font-bold text-berry">
				KSh {item.price}
			</p>

			<AddToCart item={item} />
		</div>
	</div>
</div>