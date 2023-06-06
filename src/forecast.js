export default class Forecast {
    constructor(date, temp, feels_like, humidity, uvi, clouds, icon, rain = null, alerts = null) {
        this.date = date;
        this.feels_like = feels_like;
        this.temp = temp;
        this.humidity = humidity;
        this.uvi = uvi;
        this.clouds = clouds;
        this.rain = rain;
        this.alerts = alerts;
        this.icon = icon
    }


    createSunrise(sunrise) {
        this.sunrise = sunrise;
    }

    createSunset(sunset) {
        this.sunset = sunset
    }

    createMaxTemp(temp) {
        this.maxTemp = temp;
    }

    createMinTemp(temp) {
        this.minTemp = temp;
    }

    createPop(pop) {
        this.pop = pop;
    }
}