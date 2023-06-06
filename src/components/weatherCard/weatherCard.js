import './weatherCard.css'

export default function weatherCard(weather) {
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('weather-card')
    const tmp = document.createElement('h3')
    tmp.textContent = weather.feels_like
    cardDiv.appendChild(tmp)
    const date = document.createElement('p')
    date.classList.add("date")
    date.textContent = weather.date.printDate();
    cardDiv.appendChild(date)
    const time =document.createElement('p')
    time.textContent = weather.date.printTime()
    cardDiv.appendChild(time)



    return cardDiv
}