<script lang="ts">
import Button from '$lib/components/Button.svelte';
</script>

<section class="bg-cream px-6 py-20">
	<div class="mx-auto max-w-4xl text-center">
		<p class="font-semibold uppercase tracking-widest text-berry">
			Get In Touch
		</p>

		<h1 class="mt-4 text-5xl font-bold leading-tight text-chocolate md:text-6xl">
			We'd love to
			<span class="text-berry">hear from you.</span>
		</h1>

		<p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-chocolate/70">
			Have a question, a special request, or simply want to say hello?
			We'd love to hear from you.
		</p>
	</div>
</section>

<section class="bg-vanilla px-6 py-20">
	<div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

		<!-- LEFT: Contact Information -->
		<div>
			<p class="font-semibold uppercase tracking-widest text-berry">
				Let's Connect
			</p>

			<h2 class="mt-4 text-4xl font-bold leading-tight text-chocolate md:text-5xl">
				Have a question?
				<span class="text-berry">We'd love to help.</span>
			</h2>

			<p class="mt-6 max-w-xl text-lg leading-8 text-chocolate/70">
				Whether you're looking for a sweet treat, have a special request,
				or simply want to say hello, feel free to reach out to us.
			</p>

			<div class="mt-8 space-y-6">

				<!-- Location -->
				<div class="flex items-start gap-4">
					<i class="ri-map-pin-line text-2xl text-berry"></i>

					<div>
						<h3 class="font-bold text-chocolate">Location</h3>
						<p class="mt-1 text-chocolate/70">
							Nairobi, Kenya
						</p>
					</div>
				</div>

				<!-- Phone -->
				<div class="flex items-start gap-4">
					<i class="ri-phone-line text-2xl text-berry"></i>

					<div>
						<h3 class="font-bold text-chocolate">Phone</h3>
						<p class="mt-1 text-chocolate/70">
							+254 700 000 000
						</p>
					</div>
				</div>

				<!-- Email -->
				<div class="flex items-start gap-4">
					<i class="ri-mail-line text-2xl text-berry"></i>

					<div>
						<h3 class="font-bold text-chocolate">Email</h3>
						<p class="mt-1 text-chocolate/70">
							hello@melt.com
						</p>
					</div>
				</div>

			</div>
		</div>


		<!-- RIGHT: Contact Form -->
		<div class="rounded-3xl bg-cream p-8 shadow-sm md:p-10">
			<p class="font-semibold uppercase tracking-widest text-berry">
				Send Us a Message
			</p>

			<h2 class="mt-3 text-3xl font-bold text-chocolate">
				Let's talk sweet things.
			</h2>

			<form class="mt-8 space-y-6">

				<!-- Name -->
				<div>
					<label for="name" class="font-medium text-chocolate">
						Full Name
					</label>

					<input
						id="name"
						type="text"
						placeholder="Your name"
						class="mt-2 w-full rounded-2xl border border-chocolate/20 bg-vanilla px-4 py-3 text-chocolate outline-none transition focus:border-berry"
					/>
				</div>

				<!-- Email -->
				<div>
					<label for="email" class="font-medium text-chocolate">
						Email Address
					</label>

					<input
						id="email"
						type="email"
						placeholder="you@example.com"
						class="mt-2 w-full rounded-2xl border border-chocolate/20 bg-vanilla px-4 py-3 text-chocolate outline-none transition focus:border-berry"
					/>
				</div>

				<!-- Message -->
				<div>
					<label for="message" class="font-medium text-chocolate">
						Message
					</label>

					<textarea
						id="message"
						rows="5"
						placeholder="Tell us what's on your mind..."
						class="mt-2 w-full resize-none rounded-2xl border border-chocolate/20 bg-vanilla px-4 py-3 text-chocolate outline-none transition focus:border-berry"
					></textarea>
				</div>

				<!-- Send Button -->
				<Button
					href="#"
					text="Send Message"
					icon="ri-send-plane-line"
				/>

			</form>
		</div>

	</div>
</section>

<section class="bg-pink px-6 py-20">
	<div class="mx-auto max-w-3xl text-center">
		<p class="font-semibold uppercase tracking-widest text-chocolate">
			Come Visit Us
		</p>

		<h2 class="mt-4 text-4xl font-bold leading-tight text-chocolate md:text-5xl">
			Sweet moments are better
			<span class="text-berry">shared together.</span>
		</h2>

		<p class="mx-auto mt-5 max-w-xl text-lg leading-8 text-chocolate/70">
			Stop by MELT, grab your favorite treat, and make your
			next moment a little sweeter.
		</p>

		<div class="mt-8">
			<div class="inline-flex items-center gap-3 rounded-2xl bg-vanilla px-6 py-4">
				<i class="ri-time-line text-2xl text-berry"></i>

				<div class="text-left">
					<p class="font-bold text-chocolate">Opening Hours</p>
					<p class="text-chocolate/70">
						Monday - Sunday · 10:00 AM - 8:00 PM
					</p>
				</div>
			</div>
		</div>
	</div>
</section>