const axios = require('axios');

axios.delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log('To-Do eliminado:', response.status))
    .catch(error => console.error('Error:', error));
