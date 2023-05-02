import { getLocationData, getForecast } from "./apiFetcher"
import Location from "./location"


const content = document.getElementById('content')


//getApiData()

let currLocation = await getLocationData('London')
console.log(currLocation)

getForecast(currLocation)

console.log(currLocation.weather)

const locationHeader = document.createElement('h1')
locationHeader.textContent = currLocation.name


document.body.appendChild(locationHeader)
