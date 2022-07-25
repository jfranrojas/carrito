import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { obtenerCarritoStorage, renderProductosCarrito } from "./carritoIndex.js";
// import { productos } from "./stock.js";


document.addEventListener("DOMContentLoaded", () => {

  mostrarProductos();

  if (localStorage.getItem("carrito")) {
    const carritoStorage = obtenerCarritoStorage();
    renderProductosCarrito(carritoStorage);
    actualizarCarrito(carritoStorage);
  }
})