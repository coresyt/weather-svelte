import { createApi } from 'unsplash-js'

import type { UnsplashApiRes, UnsplashApiResBase, WeatherApiRes, WeatherApiResBase } from '../types'
import { PRIVATE_API_WEATHER_KEY, PRIVATE_API_UNPLASH_KEY } from '$env/static/private'

export const getWeatherApi = async ({ city }: { city: string }): Promise<WeatherApiRes | void> => {
  try {
    if (!city) throw new Error('city is required!')
    const data = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, {
      headers: {
        'X-RapidAPI-Key': PRIVATE_API_WEATHER_KEY
      }
    })
    const json: Promise<WeatherApiResBase> = data.json()
  
    const { feelslike_c, humidity, is_day } = (await json).current
    const { country, localtime, name } = (await json).location
    
    return {
      location: {
        country,
        name,
        time: localtime
      },
      feelslike: feelslike_c,
      humidity,
      isDay: is_day
    }  
  } catch (err) {
    console.log(err)
  }
}

export const getUnplashApi = async ({ image }: { image: string }): Promise<UnsplashApiRes | void> => {
  try {
    if (!image) throw new Error('city is required!')
    
    const unsplash = createApi({
      accessKey: PRIVATE_API_UNPLASH_KEY,
    })
  
    const { response } = await unsplash.search.getPhotos({ query: image })
    if (typeof response !== 'object') throw new Error('reponse is null!')
    const { regular } = response.results[0].urls

    return { url: regular }
  } catch (err) {
    console.log(err)
  }
}
