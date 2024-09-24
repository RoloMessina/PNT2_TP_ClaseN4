require('dotenv').config();
const axios = require('axios');

async function obtenerClima(ciudad) {
    const apiKey = process.env.OPENWEATHER_API_KEY; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

    try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(`Clima en ${data.name}, ${data.sys.country}:`);
        console.log(`Temperatura: ${data.main.temp}°C`);
        console.log(`Clima: ${data.weather[0].description}`);
    } catch (error) {
        console.error('Error al obtener los datos del clima', error);
    }
}

obtenerClima('Buenos Aires');
