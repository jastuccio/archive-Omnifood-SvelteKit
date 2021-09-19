// https://stordahl.dev/bits/typescript-module-sanity

import sanityClient from '@sanity/client';

type Client = {
	projectId: string;
	dataset: string;
	token: string;
	apiVersion: string;
	useCdn: boolean;
};

// Create a client to connect to the Sanity datastore.
const options: Client = {
	apiVersion: 'v2021-09-16',
	projectId: 'gq9jzuhz',
	dataset: 'production',
	token:
		'skYgeRju66RI8kEm50icO9IiZcZljb1D63BZGgYewvvisZoHAAF4KWgrO4hZ8QYyRtEQkUTAnykyJcaLrVKh8KQ2mo41QXWp3ioKY067wHzFFS9YfB3l7leM0zDcMiyJqAXLS4x424AZg9LUJgvePbRQVtYVEV826mO8j1XDdigGy2HzRqHa',
	useCdn: false
};

const client = sanityClient(options);

export { client };

// // create instance of sanityClient
// // this is how you connect your front-end to your sanity studio
// const options: Client = {
// 	//your project ID
// 	// projectId: 'xkm5mf7o',
// 	projectId: 'gq9jzuhz', // todont list content
// 	//your dataset; defaults to production
// 	dataset: 'production',
// 	apiVersion: '2021-09-10',

// 	// token: '{import.meta.env.VITE_SANITY_TOKEN}',
// 	token:
// 		'skQvCyKwN8WTTvRWZ74h5QNCGDek04VydOYGCl2TtzkTMDw5Y9WvMazaPr1feW35wnZXjrvWqB2znKBCSfsu8ABP0ts03zJwwjQignmwfnYF159UJxwNS8XpwcoNARGeLiURnZtDDdg1jBXA5undR22ofP6sWIF0lHN1xlpOnhrILvjpLjWv',

// 	useCdn: false
// };
