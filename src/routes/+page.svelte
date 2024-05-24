<script lang='ts'>
	import type { UnsplashApiRes, WeatherApiRes } from '../types'
  
  const fetchingDataWeather = async () => {
    const fetchData= await fetch('/api/weather?q=Mexico+City')
    const json: Promise<WeatherApiRes> = await fetchData.json()
    return json
  }

  const fetchingDataUnsplsh = async (image: string) => {
    const fetchData= await fetch(`api/image?image=${image}`)
    const json: Promise<UnsplashApiRes> = await fetchData.json()
    return json
  }

</script>

{#await fetchingDataWeather()}
  <main>
    Loading...
  </main>
{:then { location, feelslike, humidity, isDay }}
  {#await fetchingDataUnsplsh(location.name) then { url }}
    <main style={`background-image: url(${url}); `}>
      <h2>{ location.name } - { location.country }</h2>
      <h4>Time: { location.time } - Is { isDay === 1 ? 'Day' : 'Night' }</h4>
      <p>Feels { feelslike }° Celsius - Humidity: { humidity }%</p>  
    </main>
  {/await}
{/await}

<style>
</style>