let carritoDeCompras = []
//CONTENEDOR DE PRODUCTOS
const contenedorProductos = document.getElementById('contenedor-productos');
//CONTENEDOR DEL CARRITO
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciar = document.getElementById('vaciar-carrito')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
//BUSCADOR DE TALLES
const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')



// FILTRO TALLES
selecTalles.addEventListener('change',()=>{
    console.log(selecTalles.value)
    if(selecTalles.value == 'all'){
        mostrarProductos(stockCarrito)
    }else{
        mostrarProductos(stockCarrito.filter(elemento=> elemento.talle == selecTalles.value))
    }

})

//BUSCADOR
buscador.addEventListener('input',(e)=>{
    console.log(e.target.value);
    let buscaBusca = stockCarrito.filter(elemento => elemento.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    mostrarProductos(buscaBusca)
})

mostrarProductos(stockCarrito)

//MOSTRAR PRODUCTOS
stockCarrito.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Talle: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
    //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
    //el add event listener

    boton.addEventListener('click', () => {
        //esta funcion ejecuta el agregar el carrito con la id del producto
        agregarAlCarrito(producto.id)
        //
    })
})


function mostrarProductos(array){
    contenedorProductos.innerHTML = ""
    array.forEach(el=> {
        let div = document.createElement('div')
        div.className = 'producto'
        div.innerHTML = `<div class="card">
                            <div class="card-image">
                                <img src="${el.img}">
                                <span class="card-title">${el.nombre}</span>
                                <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fas fa-shopping-cart"></i></a>
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

//1ER PASO, AGREGAR LOS PRODUCTOS AL CARRITO
function agregarAlCarrito(prodId) {
    //COMPARATIVA DE PRODUCTOS
    existencia = carritoDeCompras.some(prod => prod.id === prodId)
    if(existencia){
        const producto = carritoDeCompras.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    }else {
        const itemNuevo = stockCarrito.find((prod) => prod.id === prodId)
        carritoDeCompras.push(itemNuevo)
    }
    actualizarCarrito() 

    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}

//FUNCION ELIMINAR DEL CARRITO
const eliminarDelCarrito = (prodId) => {
        const item = carritoDeCompras.find((prod) => prod.id === prodId)
    
        const indice = carritoDeCompras.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.
    
        carritoDeCompras.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
        // un elemento 
        actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
        //MODIFICA EL CARRITO
        console.log(carritoDeCompras)
    }

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carritoDeCompras.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    //SEPTIMO PASO
    contadorCarrito.innerText = carritoDeCompras.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carritoDeCompras)
    precioTotal.innerText = carritoDeCompras.reduce((acc, prod) => acc + prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

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