async function mostrarUsuario() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error('Error:', error);
    }
}

mostrarUsuario();
