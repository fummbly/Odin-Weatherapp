export default class Location {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.currForecast = null
        this.daily = []
        this.hourly = []
    }

    addWeather(forecast) {
        this.weather.push(forecast)
    }

    getWeather() {
        return this.weather
    }

    getName() {
        return this.name
    }

    addCurrForecast(forecast) {
        this.currForecast = forecast
    }

    addDailyForecast(forecast) {
        this.daily.push(forecast)
    }
}