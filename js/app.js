// Do NOT show API KEY on your JS FILE
const api_key = `1ba2aed6b07ba63ff2fcf7a2e0543a83`;

const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
loadTemperature('new york')