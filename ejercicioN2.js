const axios = require('axios');

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        console.log('Post eliminado:', response.status);
    })
    .catch(error => {
        console.error('Error:', error);
    });

   