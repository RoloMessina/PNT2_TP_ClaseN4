async function obtenerTareas() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?userId=3');
        const tareas = await response.json();
        tareas.forEach(tarea => console.log(tarea.title));
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
    }
}

obtenerTareas();
