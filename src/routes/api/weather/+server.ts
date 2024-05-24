import { getWeatherApi } from '$lib'
import { error, json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ params, url }) => {
  try {
    if (typeof url.searchParams.get('q') !== 'string') return error(404, { message: 'city is default' })
    const weather = await getWeatherApi({ city: url.searchParams.get('q')! })

    return json(weather)
  } catch (err) {
    console.log(err)
    return error(404)
  }
}
