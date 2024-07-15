import { getUnplashApi } from '$lib';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	try {
		if (typeof url.searchParams.get('image') !== 'string')
			return error(404, { message: 'city is default' });
		const unsplash = await getUnplashApi({ image: url.searchParams.get('image')! });

		return json(unsplash);
	} catch (err) {
		console.log(err);
		return error(404);
	}
};
