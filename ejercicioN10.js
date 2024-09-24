const axios = require('axios');

async function obtenerArticulos() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const articulos = response.data;
        articulos.forEach(articulo => console.log(articulo.title));
    } catch (error) {
        console.error('Error al obtener los artículos:', error);
    }
}

obtenerArticulos();
