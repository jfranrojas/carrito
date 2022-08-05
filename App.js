import { carritoIndex } from "./carritoIndex.js";
import { getData } from "./getData.js";

export const mostrarProductos = async () => {
  const productos = await getData();
  const contenedorProductos = document.getElementById("producto-contenedor");

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title text-center">${producto.nombre}</span>
                        <br></br>
                        <button id=boton${producto.id} class="agregar-carrito text-center">Agregar al carrito</button>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>Talle: ${producto.talle}</p>
                          <p>$ ${producto.precio}</p>
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () => {
      carritoIndex(producto.id);
    });
  });
};
