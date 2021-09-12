// https://stordahl.dev/bits/typescript-module-sanity

import sanityClient from '@sanity/client';

type Client = {
	projectId: string;
	dataset: string;
	token: string;
	apiVersion: string;
	useCdn: boolean;
};

// create instance of sanityClient
// this is how you connect your front-end to your sanity studio
const options: Client = {
	//your project ID
	projectId: 'xkm5mf7o',
	//your dataset; defaults to production
	dataset: 'production',
	apiVersion: '2021-09-10',

	// token: '{import.meta.env.VITE_SANITY_TOKEN}',
	token:
		'skQvCyKwN8WTTvRWZ74h5QNCGDek04VydOYGCl2TtzkTMDw5Y9WvMazaPr1feW35wnZXjrvWqB2znKBCSfsu8ABP0ts03zJwwjQignmwfnYF159UJxwNS8XpwcoNARGeLiURnZtDDdg1jBXA5undR22ofP6sWIF0lHN1xlpOnhrILvjpLjWv',

	useCdn: false
};

const client = sanityClient(options);

export { client };
