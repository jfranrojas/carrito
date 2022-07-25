import { eliminarProductoCarrito } from "./carritoIndex.js";

const modalContenedor = document.querySelector('.modal-contenedor')
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});

// Delegación de eventos
modalCarrito.addEventListener('click', (e) => {
    // Detiene la propagación del vento click dentro del contenedor modalCarrito
    e.stopPropagation();

    // Si el elemento tiene la clase "boton-eliminar" invoco a la funcion que elimina un producto
    if (e.target.classList.contains("boton-eliminar")) {
        eliminarProductoCarrito(Number(e.target.value));
    }
});