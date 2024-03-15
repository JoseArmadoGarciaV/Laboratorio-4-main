/**
 * lab 4 ingenieria  de software
 * log in system
 * 
 * @outor Garcia Vallejos Jose Armando
 * @Version 1.0
 * @Date 2024/03/08
 * @lenguaje JavaScrip
 */

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // get user and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // load user JSON file
    fetch('usuarios.json')
        .then(response => response.json())
        .then(data => {
            // Check if the user is registered
            const usuarioRegistrado = verificarUsuario(data, username, password);

            // Display the corresponding message
            const mensaje = document.getElementById('loginMessage');
            if (usuarioRegistrado) {
                mensaje.textContent = 'Inicio de sesión exitoso. ¡Bienvenido!';
            } else {
                mensaje.textContent = 'Usuario no registrado o contraseña incorrecta. Por favor, inténtelo de nuevo.';
            }
        })
        .catch(error => {
            console.error('Hubo un error al cargar el archivo usuarios.json:', error);
        });
});

// User verification function
function verificarUsuario(usuarios, username, password) {
// Search for the user in the list of users
    return usuarios.some(usuario => usuario.cuenta === username && usuario.clave === password);
}
