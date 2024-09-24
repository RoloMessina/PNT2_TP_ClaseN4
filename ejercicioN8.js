const axios = require('axios');

async function obtenerClima(ciudad) {
    const apiKey = 'b776a52b7f1c0e5f7fff73478409c0c7';
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

// Llama a la función con la ciudad deseada
obtenerClima('Buenos Aires');
