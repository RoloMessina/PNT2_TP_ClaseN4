async function mostrarPersonajes() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const personajes = data.results.slice(0, 10); // Limita a los 10 primeros
    personajes.forEach(personaje => console.log(personaje.name));
}

mostrarPersonajes();

