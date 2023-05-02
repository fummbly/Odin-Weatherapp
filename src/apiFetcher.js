import Location from "./location"
import Date from "../date"
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


export async function getForecast(location) {
    const forecast_call = `http://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&appid=${api_key}&units=imperial`
    try {
        const response = await fetch(forecast_call)
        const data = await response.json()
        const forecasts = data['list']
        forecasts.forEach((forecast) => {
            const date = createDate(forecast["dt_txt"])
            const feels_like = forecast["main"].feels_like
            const tmp = forecast["main"].temp

            location.addWeather(new Forecast(date,feels_like, tmp, forecast['weather'] ))
        })
        
    } catch (error) {
        console.log(error)
    }
}

