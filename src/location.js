export default class Location {
    constructor(name, lat, lon) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.weather = []
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
}