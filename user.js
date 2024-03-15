/**
 * lab 3 Ingenieria de sofware
 * Usuario y control de usuario
 * 
 * @outor Garcia Vallejos Jose Armando
 * @Version 1.0
 * @Date 2024/03/08
 * @lenguaje JavaScrip
 */


const fs = require('fs');

// Definición de las clases Usuario y ControlUsuario
class Usuario {
    constructor(id, nombre, cuenta, clave, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.clave = clave;
        this.email = email;
        this.rol = rol;
    }
}

class ControlUsuario {
    constructor() {
        this.lista = [];
    }

    adicionar(usuario) {
        this.lista.push(usuario);
    }
}

// Función para cargar usuarios desde el archivo usuarios.json
function cargarUsuarios() {
    try {
        const data = fs.readFileSync('usuarios.json', 'utf8');
        const usuarios = JSON.parse(data);
        return usuarios;
    } catch (err) {
        console.error('Error al leer el archivo usuarios.json:', err);
        return [];
    }
}

// Instanciamos el controlador de usuarios
const controlUsuario = new ControlUsuario();

// Cargamos usuarios existentes desde el archivo usuarios.json
const usuariosExistentes = cargarUsuarios();

// Agregamos usuarios existentes al controlador de usuarios
usuariosExistentes.forEach(usuario => {
    controlUsuario.adicionar(new Usuario(usuario.id, usuario.nombre, usuario.cuenta, usuario.clave, usuario.email, usuario.rol));
});

// Creamos instancias de Usuario con los datos de los nuevos usuarios
const usuario1 = new Usuario(13, "Sara Perez", "nuevousuario1", "password1", "nuevousuario1@example.com", "rol1");
const usuario2 = new Usuario(14, "Monica Perez", "nuevousuario2", "password2", "nuevousuario2@example.com", "rol2");
const usuario3 = new Usuario(15, "Sofia Perez 3", "nuevousuario3", "password3", "nuevousuario3@example.com", "rol3");

// Agregamos los nuevos usuarios al controlador de usuarios
controlUsuario.adicionar(usuario1);
controlUsuario.adicionar(usuario2);
controlUsuario.adicionar(usuario3);

// Convertir la lista de usuarios a formato JSON
const usuariosJSON = JSON.stringify(controlUsuario.lista);

// Escribir el JSON en el archivo usuarios.json
fs.writeFileSync('usuarios.json', usuariosJSON);

// Mostrar mensaje de éxito
console.log("Datos de los usuarios guardados en usuarios.json");
