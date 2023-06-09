import Location from "./location"
//import Date from "../date"
import Forecast from "./forecast"

const api_key = '8802b20c2a01fb90f6f23dfeba4d3866'


export async function getLocationData(city) {
    const city_call = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`
    try {
        const response = await fetch(city_call)
        const data = await response.json()
        const city_data = data[0]

        return new Location(city_data.name, city_data.lat, city_data.lon)

    } catch (error) {
        console.log(error)
    }
}


function createDate(dateData) {
    const splitDate = dateData.split('-')
    const year = splitDate[0]
    const month = splitDate[1]
    const splitDT = splitDate[2].split(' ')
    const day = splitDT[0]
    const time = splitDT[1]

    return new Date(year, month, day, time)
}

function createCurrForecast(data) {
    const currDate = new Date(data.dt * 1000);
    const currForecast = new Forecast(currDate, data.temp, data.feels_like, data.humidity, data.uvi, data.clouds, data.weather, data.rain? data.rain: null, data.alerts? data.alerts: null )
    const sunrise = new Date(data.sunrise * 1000);
    currForecast.createSunrise(sunrise.toLocaleTimeString('en-US'))
    const sunset = new Date(data.sunset * 1000)
    currForecast.createSunset(sunset.toLocaleTimeString('en-US'))
    return currForecast
}

function createDayForecast(data) {
    const date = new Date(data.dt * 1000)
    const dayForecast = new Forecast(date, data.temp.day, data.feels_like.day, data.humidity, data.uvi, data.clouds, data.weather)
    dayForecast.createMaxTemp(data.temp.max)
    dayForecast.createMinTemp(data.temp.min)
    const sunrise = new Date(data.sunrise * 1000)
    dayForecast.createSunrise(sunrise.toLocaleTimeString('en-US'))
    const sunset = new Date(data.sunset * 1000)
    dayForecast.createSunset(sunset.toLocaleTimeString('en-US'))
    return dayForecast
}   


export async function getForecast(location) {
    const forecast_call = `http://api.openweathermap.org/data/3.0/onecall?lat=${location.lat}&lon=${location.lon}&appid=${api_key}&exclude=minutely&units=imperial`
    try {
        const response = await fetch(forecast_call)
        const data = await response.json()
        console.log(data)
        const current = data.current;
        location.addCurrForecast(createCurrForecast(current))
        const daily = data.daily
        daily.forEach((day) => {
            location.addDailyForecast(createDayForecast(day))
        })

        // const forecasts = data['list']
        // forecasts.forEach((forecast) => {
        //     const date = createDate(forecast["dt_txt"])
        //     const feels_like = forecast["main"].feels_like
        //     const tmp = forecast["main"].temp

        //     location.addWeather(new Forecast(date,feels_like, tmp, forecast['weather'] ))
        // })
        
    } catch (error) {
        console.log(error)
    }
}

