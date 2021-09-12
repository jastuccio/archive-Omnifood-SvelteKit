/// <reference types="@sveltejs/kit" />

// https://dev.to/danawoodman/storing-environment-variables-in-sveltekit-2of3
interface ImportMetaEnv {
	SANITY_TOKEN: string;
	INFO: string;
}
