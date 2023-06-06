export default function currentWeather(forecast) {
    const forecastDiv = document.createElement('div')
    forecastDiv.id = 'curr-forecast';
    const temp = document.createElement('h2')
    temp.textContent = forecast.temp + "°";
    const feels_like = document.createElement('p')
    feels_like.textContent = forecast.feels_like + '°'
    const weatherCondition = document.createElement('h2')
    weatherCondition.textContent = forecast.icon[0].description;
    forecastDiv.appendChild(temp)
    forecastDiv.appendChild(feels_like)
    forecastDiv.appendChild(weatherCondition)


    return forecastDiv
}