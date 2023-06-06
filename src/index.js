import { getLocationData, getForecast } from "./apiFetcher"
import Location from "./location"
import forecastDrawer from "./components/forecastDrawer/forcastDrawer"
import weatherCard from "./components/weatherCard/weatherCard"
import currentWeather from "./components/currentWeather/currentWeather"
import './style.css'

let location = 'Boston'

const content = document.getElementById('content')


//getApiData()

let currLocation = await getLocationData(location)


const data = await getForecast(currLocation)

const dat = document.createElement('p')
dat.textContent = data;

console.log(currLocation.currForecast)
console.log(currLocation.daily)

const locationHeader = document.createElement('h1')
locationHeader.textContent = currLocation.name

const searchDiv = document.createElement('div')
const searchInput = document.createElement('input')
searchInput.type = 'text'
const searchBtn = document.createElement('button')
searchBtn.type = 'submit'
searchBtn.innerHTML = 'Search'


searchDiv.appendChild(searchInput)
searchDiv.appendChild(searchBtn)

document.body.appendChild(searchDiv)


document.body.appendChild(locationHeader)
document.body.appendChild(currentWeather(currLocation.currForecast))
// document.body.appendChild(forecastDrawer(currLocation.getWeather()))
