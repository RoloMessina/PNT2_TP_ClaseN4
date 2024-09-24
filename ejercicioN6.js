async function mostrarComentarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=2');
        const comments = await response.json();
        console.log(comments);
    } catch (error) {
        console.error('Error:', error);
    }
}

mostrarComentarios();
