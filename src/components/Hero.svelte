<script context="module" lang="ts">
	import { client } from '../lib/SanityClient';

	export async function preload() {
		const query = "*[_type == 'heroSection']";

		const res = await client.fetch(query);

		// console.log(res);
		console.log(res);

		return { res };
	}
</script>

<!--
	export async function preload() {
		const query = "*[_type == 'post']{_id, slug, title}";
		const posts = await client.fetch(query);
		return { posts };
	}
</script>


<script lang="ts">
	type Slug = {
		_type: string,
		current: string,
	}
	
	export let posts: { slug: Slug; title: string }[] = [];
</script>
-->

<section>
	<div class="hero">
		<div>
			<!-- hero-text-box -->
			<h1>test</h1>
			<!-- <h1>A healthy meal delivered to your door, every single day</h1> -->
			<p>
				The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored
				to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!
			</p>
			<a href="#" class="btn--full margin-right-sm">Start eating well</a>
			<a href="#" class="btn--outline">Learn more &darr;</a>
		</div>
		<div>
			<!-- hero-img-box -->
			<img
				src="img/hero.png"
				alt="woman enjoying food, meals in storage containers, and food bowls on a table"
			/>
		</div>
	</div>
</section>

<style>
	section {
		background-color: #fdf2e9;
		padding: 9.6rem 0;
	}
	.hero {
		max-width: 130rem;
		margin: 0 auto;
		display: grid;
		gap: 9.6rem;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	p {
		font-size: 2rem;
		line-height: 1.6;
		margin-bottom: 4.8rem;
	}

	a:link,
	a:visited {
		display: inline-block;
		text-decoration: none;
		font-size: 2rem;
		padding: 1.6rem 3.2rem;
		border-radius: 9px;

		/* TODO: research svelte transitions for this */
		transition: background-color 0.3s;
	}

	.btn--full:link,
	.btn--full:visited {
		/* background-color: var(--primary); */
		background-color: #e67e22;
		color: #fff;
	}
	.btn--full:hover,
	.btn--full:active {
		/* background-color: var(--primary); */
		background-color: #cf711f;
	}
	.btn--outline:link,
	.btn--outline:visited {
		/* background-color: var(--primary); */
		background-color: #fff;
		color: #555;
	}
	.btn--outline:hover,
	.btn--outline:active {
		/* background-color: var(--primary); */
		background-color: #fdf2e9;

		/* Trick to add a border inside the button
		 */
		box-shadow: inset 0 0 0 3px #fff;
	}

	/* helper class */
	.margin-right-sm {
		margin-right: 1.6rem !important;
	}
</style>
