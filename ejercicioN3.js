const axios = require('axios');

async function listarAlbumes() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums?userId=1');
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

listarAlbumes();
