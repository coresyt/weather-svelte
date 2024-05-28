<script lang='ts'>
	import type { UnsplashApiRes, WeatherApiRes } from '../types'
  
  const fetchingDataWeather = async () => {
    const fetchData= await fetch('/api/weather?q=Mexico+City')
    const json: Promise<WeatherApiRes> = await fetchData.json()
    return json
  }

  const fetchingDataUnsplash = async (image: string) => {
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
  {#await fetchingDataUnsplash(location.name) then { url }}
    <main
      class="card"
      style={`background-image: url(${url});`}
    >
      <div
        class="card__info"
      >
        <h2
          class="text-xl font-bold"
        >{ location.name } - { location.country }</h2>
        <h4
          class="text-slate-200"
        >Time: <span>{ location.time.split(' ')[1] }</span> - Is <x-s class={isDay === 1 ? 'text-yellow-400' : 'text-blue-950'}>{ isDay === 1 ? 'Day' : 'Night' }</x-s></h4>
        <p
          class="text-slate-50"
        >Feels <span>{ feelslike }°</span> - Humidity: <span>{ humidity }%</span></p>
      </div>
    </main>
  {/await}
{/await}

<style lang="postcss">
@tailwind components;

@layer components {
  .card {
    @apply w-80 h-[530px] my-16 mx-auto flex items-center justify-center text-white bg-slate-900 border-slate-800 bg-center bg-no-repeat rounded-3xl overflow-hidden;
  }
  .card__info {
    @apply w-[250px] h-[250px] bg-white/25 border-2 border-white rounded-3xl p-4 backdrop-blur-[8px] flex flex-col items-center justify-around [&>h2>span]:text-sky-500 [&>p>span]:text-sky-500 [&>h4>span]:text-sky-500 overflow-hidden box-border;
  }
}
</style>