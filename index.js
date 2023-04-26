const content = document.getElementById('content')

const api_key = '8802b20c2a01fb90f6f23dfeba4d3866'

const api_call = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=8802b20c2a01fb90f6f23dfeba4d3866`

console.log(api_call)
async function getApiData() {
    const response = await fetch(api_call, {mode: 'cors'})
    const data = response.json()
    console.log(data)
}


getApiData()