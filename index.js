const content = document.getElementById('content')

const api_key = '8802b20c2a01fb90f6f23dfeba4d3866'

const city_call = `http://api.openweathermap.org/geo/1.0/direct?q=Boston&appid=${api_key}`

const weather_call = 'http://api.openweathermap.org/data/2.5/weather?'

class Location {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon
        this.weather = []
    }

    addWeather(forecast) {
        this.weather.push(forecast)
    }

    getWeather() {
        return this.weather
    }

    
}

class Forecast {
    constructor(date, feels_like, tmp, weather ) {
        this.date = date;
        this.feels_like = feels_like;
        this.tmp = tmp;
        this.weather = weather
    }

    
}

function createLocation(data) {
    const loc = data[0]

    return new Location(loc.name, loc.lat, loc.lon)
}

function createWeather(data) {
    const forecast = data

    return new Forecast(forecast.dt_txt, forecast.main.feels_like, forecast.main.temp, forecast.weather)
}

async function getApiData() {
    const city_response = await fetch(city_call, {mode: 'cors'})
    const data = await city_response.json()
    const currLocation = createLocation(data)

    console.log(currLocation.name)
    const weather_call = `http://api.openweathermap.org/data/2.5/forecast?lat=${currLocation.lat}&lon=${currLocation.lon}&appid=${api_key}&units=imperial`
    const weather_response = await fetch(weather_call, {mode: 'cors'})
    const weather_data = await weather_response.json()
    weather_data['list'].forEach((timestamp) => {
        console.log(timestamp)
        currLocation.addWeather(createWeather(timestamp))
    }) 

    console.log(currLocation.weather)
}


getApiData()