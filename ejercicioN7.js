async function eliminarFoto() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos/1', {
        method: 'DELETE'
    });
    if (response.ok) {
        console.log('Foto eliminada');
    }
}

eliminarFoto();
