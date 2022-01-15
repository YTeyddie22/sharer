import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: process.env.REACT_APP_PROJECT_ID,
	dataset: 'production',
	apiVersion: '2022-11-16',
	useCdn: true,
	token: process.env.REACT_APP_TOKEN,
});

const builder = imageBuilder(client);

export const urlFor = (source) => builder.image(source);
