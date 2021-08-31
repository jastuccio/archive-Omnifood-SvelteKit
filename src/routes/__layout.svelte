<slot />

<style>
	/* all :global styles should be in the __layout */
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
</style>
