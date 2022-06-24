let carritoDeCompras = []

const contenedorProductos = document.getElementById('Contenedor-productos');
const contenedorCarrito = document.getElementById('Carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')


//filtro
selecTalles.addEventListener('change',()=>{
    console.log(selecTalles.value)
    if(selecTalles.value == 'all'){
        mostrarProductos(stockCarrito)
    }else{
        mostrarProductos(stockCarrito.filter(elemento=> elemento.talle == selecTalles.value))
    }

})

//Buscador
buscador.addEventListener('input',(e)=>{
    console.log(e.target.value);
    let buscaBusca = stockCarrito.filter(elemento => elemento.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    mostrarProductos(buscaBusca)
})

mostrarProductos(stockCarrito)

//logica Ecommerce
function mostrarProductos(array){
    contenedorProductos.innerHTML = ""
    array.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                            <div class="card-image">
                                <img src="${el.img}">
                                <span class="card-title">${el.nombre}</span>
                                <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add_shopping_cart</i></a>
                            </div>
                            <div class="card-content">
                                <p>${el.desc}</p>
                                <p>Talle: ${el.talle}</p>
                                <p> $${el.precio}</p>
                            </div>
                        </div>`
        
        contenedorProductos.appendChild(div)
        let btnAgregar = document.getElementById(`boton${el.id}`)
        // console.log(btnAgregar)
        btnAgregar.addEventListener('click', ()=>{
            agregarAlCarrito(el.id)
        })
    })
   
}


function agregarAlCarrito(id) {
   let productoAgregar = stockCarrito.find(item => item.id === id)
    console.log(productoAgregar)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}



function mostrarCarrito(productoAgregar) {

    let div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML= `<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <button id=eliminar${productoAgregar.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(ele => ele.id !== productoAgregar.id)
        actualizarCarrito()
        localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
    })

}


function  actualizarCarrito (){
   contadorCarrito.innerText = carritoDeCompras.length
   precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0)
                                                               
}


function recuperar() {

    let recuperarLS = JSON.parse(localStorage.getItem('carrito'))
    if(recuperarLS){
       for (const elemento of recuperarLS) {
        mostrarCarrito(elemento)
        carritoDeCompras.push(elemento)
        actualizarCarrito()
    } 
    }
    

}


recuperar()


// //----------- AGREGANDO PRODUCTOS  ---------//

// let productos = [];
// //REMERAS
// productos.push(new Producto("1) Remera Clásica", 2000,20));  
// productos.push(new Producto("2) Remera Estampada", 2500,12));
// productos.push(new Producto("3) Remera bordada", 3000,5));
// //GORRAS
// productos.push(new Producto("1) Gorra con logo", 2000,2));
// productos.push(new Producto("2) Gorra bordada", 2500,5));
// productos.push(new Producto("3) Gorra lisa", 3000,10));
// //PANTALONES
// productos.push(new Producto("1) Pantalon jogger", 2000,7));
// productos.push(new Producto("2) Pantalon jean", 2500,7));
// productos.push(new Producto("3) Pantalon jean clásico", 3000,15));



// let categorias
// function mostrarRemeras(){
//     categorias = productos.filter((productos)=> productos.modelo.includes("Remera"))
//     mostrarListaOrdenada();  
// }
// function mostrarGorras(){
//     categorias = productos.filter((productos)=> productos.modelo.includes("Gorra"))
//     console.log(categorias)
//     mostrarListaOrdenada();  
// }
// function mostrarPantalones(){
//     categorias = productos.filter((productos)=> productos.modelo.includes("Pantalon"))
//     console.log(categorias)
//     mostrarListaOrdenada(); 
// }
// function mostrar(){
//     productos.forEach((producto) =>{
//      modelo = prompt(producto.modelo)
//     })
// }
// //----------- PROCESO DE COMPRA ---------//
// let total
// const sumarEnvio = () =>{
//     if (total <= 4000){
//         total = total + 500;
//         alert(`El total con envío es de $${total}. Gracias por tu compra!`)
//     }else{
//         alert(`El envío es gratis \nTotal de tu compra: $${total} \nGracias por tu compra!`)
//     }
// }

// let eleccion
// let productoFiltrado
// let cantidad
// const mostrarListaOrdenada = () => {
//     productoFiltrado = [];
//     categorias.forEach( producto => productoFiltrado.push(producto.modelo+" $"+parseInt(producto.precio)));
//     eleccion = parseInt(prompt("¿Qué te gustaría elegir?\nLista de precios: "+"\n"+productoFiltrado.join("\n")));
//     console.log(eleccion)
        
//     switch(eleccion){
//             case 1: eleccion = productoFiltrado[0]
//                 cantidad = parseInt(prompt("¿Cuantas unidades te gustaría comprar?\n Recordá que llevando mas de $4000 el envío es gratis \n \n Producto seleccionado: " +"\n"+ productoFiltrado[0]))
//                 total = cantidad * 2000
//                 sumarEnvio();
//                 mostrarListaOrdenada();
//                 break;
//             case 2: eleccion = productoFiltrado[1]
//             cantidad = parseInt(prompt("¿Cuantas unidades te gustaría comprar?\n Recordá que llevando mas de $4000 el envío es gratis \n \n Producto seleccionado: " +"\n"+ productoFiltrado[1]))
//                 total = cantidad * 2500
//                 sumarEnvio();
//                 mostrarListaOrdenada();
//                 break;
//             case 3: eleccion = productoFiltrado[2]
//             cantidad = parseInt(prompt("¿Cuantas unidades te gustaría comprar?\n Recordá que llevando mas de $4000 el envío es gratis \n \n Producto seleccionado: " +"\n"+ productoFiltrado[2]))
//                 total = cantidad * 3000
//                 sumarEnvio();
//                 mostrarListaOrdenada();
//                 break;
//             default: alert("Ingrese un producto valido")
//                 mostrarListaOrdenada();
//                 break;
//         }
//     comprar();
// };

// const comprar = () => {
        
// }

// let producto 

//     do{
//         producto = parseInt(prompt("Bienvenido a TiendaJS, ¿Qué desea comprar? \n 1) Remeras \n 2) Gorras \n 3) Pantalones \n 4) Salir"));

//         switch(producto) {
//             case 1: mostrarRemeras();
//                 break;
//             case 2: mostrarGorras();
//                 break;
//             case 3: mostrarPantalones();
//                 break;
//         }
//     }
    
//     while (producto != 4)