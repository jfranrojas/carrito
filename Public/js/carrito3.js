const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const precioTotal = document.getElementById('precioTotal')

let carritoDeCompras = []



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

botonVaciar.addEventListener('click', () => {
    carritoDeCompras.length = 0
    actualizarCarrito()
})

// function mostrarProductos(array){
//     contenedorProductos.innerHTML = ""
//     array.forEach(producto=> {
//         let div = document.createElement('div')
//         div.className = 'producto'
//         div.innerHTML = `
//                         <div class="card">
//                             <div class="card-image">
//                                 <img src=${producto.img}>
//                                 <span class="card-title">${producto.nombre}</span>
//                                 <a id="boton${producto.id}" class="btn-floating halfway-fab waves-effect waves-light red"><i class="fas fa-shopping-cart"></i></a>
//                             </div>
//                             <div class="card-content">
//                                 <p> ${producto.desc}</p>
//                                 <p>Talle: ${producto.talle}</p>
//                                 <p> $${el.precio}</p>
//                             </div>
//                         </div>`
        
//         contenedorProductos.appendChild(div)
//         let btnAgregar = document.getElementById(`boton${el.id}`)
//         // console.log(btnAgregar)
//         btnAgregar.addEventListener('click', ()=>{
//             agregarAlCarrito(el.id)
//         })
//     })
   
// }
stockCarrito.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="" >
    <h3>${producto.nombre}</h3>
    <p>Talle ${producto.talle} </p>
    <p class="precioProducto">Precio: ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar"> <i class= "fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () =>{
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    //CONDICIONAL PARA NO REPETIR OBJETOS
    const existencia = carritoDeCompras.some (prod => prod.id === prodId)
    
    if (existencia){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZO LA CANTIDAD
        const prod = carritoDeCompras.map (prod => { //LO BUSCA EN EL CARRITO Y SUMA 1
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL OBJETO AL CARRITO
        const item = stockCarrito.find((prod) => prod.id === prodId) 
        carritoDeCompras.push(item)
    }
    //ACTUALIZAMOS CARRITO NUEVAMENTE
    actualizarCarrito()
    console.log(carritoDeCompras)
}

const eliminarDelCarrito = (prodId) =>{
    const item = carritoDeCompras.find((prod) => prod.id === prodId)
    const indice = carritoDeCompras.indexOf(item)
    carritoDeCompras.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    
    
    carritoDeCompras.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}</p>
        <p>Cantidad <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i> </button> 
        `
        contenedorCarrito.appendChild(div)
    })
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc, prod) => acc + prod.precio, 0)
}
