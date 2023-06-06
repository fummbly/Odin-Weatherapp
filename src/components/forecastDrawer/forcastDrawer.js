import weatherCard from "../weatherCard/weatherCard"
import './forecastDrawer.css'

export default function forecastDrawer(forecast) {
    const forecastDiv = document.createElement('div')
    forecastDiv.id = 'forecast-drawer'
    forecast.forEach(weather => {
        forecastDiv.appendChild(weatherCard(weather))
    })

    return forecastDiv
}