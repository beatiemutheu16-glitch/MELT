<script lang="ts">
    import { cart } from '$lib/stores/cart';
</script>

<svelte:head>
	<title>Checkout | Melt</title>
	<meta
		name="description"
		content="Complete your Melt order."
	/>
</svelte:head>

<div class="min-h-screen bg-pink px-6 py-12">
    
    <!-- Checkout card -->
    <div class="mx-auto max-w-2xl rounded-3xl bg-vanilla p-8 shadow-md">
    <a
    href="/"
    class="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink text-chocolate transition hover:bg-berry hover:text-vanilla"
    aria-label="Back to home"
>
    <i class="ri-arrow-left-line text-lg"></i>
</a>
        <!-- Page heading -->
    <div class="mx-auto max-w-3xl text-center">
        <h1 class="text-4xl font-bold text-chocolate">
            Complete Your Order
        </h1>

        <p class="mt-3 text-chocolate/70">
            Just a few details and your sweet treats will be on their way!
        </p>
    </div>

        <!-- Full Name -->
        <div class="mt-6 mx-auto max-w-lg">
            <label
                for="name"
                class="block text-sm font-semibold text-chocolate"
            >
                Full Name
            </label>

            <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                class="mt-2 w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate placeholder:text-chocolate/40 outline-none transition focus:border-berry focus:ring-2 focus:ring-berry/20"
            />
        </div>
        <div class="mt-6 mx-auto max-w-lg">
    <label
        for="phone"
        class="block text-sm font-semibold text-chocolate"
    >
        Phone Number
    </label>

    <input
        id="phone"
        type="tel"
        placeholder="Enter your phone number"
        class="mt-2 w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate placeholder:text-chocolate/40 outline-none transition focus:border-berry focus:ring-2 focus:ring-berry/20"
    />
</div>

<div class="mt-6 mx-auto max-w-lg">
    <label
        for="address"
        class="block text-sm font-semibold text-chocolate"
    >
        Delivery Address
    </label>

    <input
        id="address"
        type="text"
        placeholder="Enter your delivery address"
        class="mt-2 w-full rounded-xl border border-chocolate/20 bg-cream px-4 py-3 text-chocolate placeholder:text-chocolate/40 outline-none transition focus:border-berry focus:ring-2 focus:ring-berry/20"
    />
</div>

<div class="mt-10 border-t border-chocolate/10 pt-8">
<div class="text-center">
    <h2 class="text-2xl font-bold text-chocolate">
        Order Summary
    </h2>

    <p class="mt-2 text-sm text-chocolate/70">
        Here's what you're ordering.
    </p>
</div>

    <div class="mt-9 mx-auto max-w-lg space-y-4">

    {#each $cart as item}
        <div class="flex items-center justify-between border-b border-chocolate/10 pb-4">
            
                <p class="font-semibold text-chocolate">
                    {item.name}
                </p>       
              <p class="text-sm text-chocolate/70">
                    KSh {item.price * item.quantity}
                </p>           
            

        </div>
    {/each}
    <div class="mt-6 flex items-center justify-between border-t border-chocolate/10 pt-5">
    <span class="font-semibold text-chocolate">
        Subtotal
    </span>

    <span class="font-semibold text-chocolate">
        KSh {$cart.reduce((total, item) => total + (item.price * item.quantity), 0)}
    </span>
</div>
<div class="mt-3 flex items-center justify-between">
        <span class="font-semi-bold text-chocolate/60">
            Delivery
        </span>

        <span class="font-semi-bold text-chocolate/60">
            KSh 200
        </span>
    </div>

    <div class="mt-5 flex items-center justify-between border-t border-chocolate/10 pt-5">
    <span class="text-lg font-bold text-chocolate">
        Total
    </span>

    <span class="text-lg font-bold text-chocolate">
        KSh {$cart.reduce((total, item) => total + (item.price * item.quantity), 0) + 200}
    </span>
</div>
<div class="justify-center flex">
<button
    type="button"
    class="mx-auto mt-8 block rounded-full bg-berry  w-48 py-3.5 font-semibold text-vanilla transition hover:-translate-y-0.5 hover:bg-berry/90"
>
    Place Order
</button>
</div>

</div>
</div>

 </div>
</div>

