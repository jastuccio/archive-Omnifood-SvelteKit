<slot />

<style>
	/* all :global styles should be in the __layout */

	:global(root) {
		--primary: #e67e22;
		/* --primary: hsl(28.2, 79.7%, 51.8%); */

		--dark-gray: #333;
	}
	:global(html) {
		box-sizing: border-box;
		font-size: 62.5%; /* 1rem = 10px */
	}

	:global(*, *:before, *:after) {
		box-sizing: inherit;
	}

	:global(body) {
		/* background-color: red; */
		font-family: sans-serif;
		line-height: 1;
		font-weight: 400;
		color: #555;
	}

	:global(img) {
		width: 100%;
	}

	:global(h1) {
		font-size: 5.2rem;
		font-weight: 700;
		line-height: 1.05;
		color: var(--dark-gray);
		letter-spacing: -0.5px;
		margin-bottom: 3.2rem;
	}
</style>
