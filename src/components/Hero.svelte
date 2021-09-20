<!-- TODO: move const sanity to lib/sanityClient.toString -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { client } from '$lib/SanityClient';

	import type { Content } from './types/Content';
	// ? convert Content to an array here?
	let content: Content[] = [];
	// let title, description;

	async function fetchContent() {
		const query = '*[_type == "heroSection"]{_id, heroTitle, heroDescription}';
		content = await client.fetch(query);

		// ? Object destructuring here?? const { property } = object

		console.log('fetchContent ->');
		console.log(typeof content);
		// console.log(content['hero Title']);
		console.log(content);

		content.forEach(function (item) {
			console.log(`heroTitle: ${item.heroTitle}`);
			let title = item.heroTitle;
			console.log(`title: ${title}`);
		});
	}
	// Run the fetch function when the component is ready (mounted).
	onMount(fetchContent);
</script>

<section>
	<div class="hero">
		<div>
			<!-- <h1>{title}</h1> -->
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
