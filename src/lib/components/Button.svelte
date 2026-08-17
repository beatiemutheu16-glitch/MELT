<script lang="ts">
	let {
		href,
		text,
		icon = 'ri-arrow-right-line',
		variant = 'berry'
	}: {
		href: string;
		text: string;
		icon?: string;
		variant?: 'berry' | 'chocolate' | 'outline';
	} = $props();
</script>

<a
	href={href}
	class={`inline-flex items-center rounded-full px-7 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 ${
		variant === 'berry'
			? 'bg-berry text-vanilla hover:bg-chocolate'
			: variant === 'chocolate'
			? 'bg-chocolate text-vanilla hover:bg-berry'
			: 'border border-chocolate text-chocolate hover:bg-chocolate hover:text-vanilla'
	}`}
>
	{text}
	<i class={`${icon} ml-2`}></i>
</a>