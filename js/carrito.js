//----- CLASE PARA CONSTRUIR PRODUCTO -----//

class Producto {
    constructor(modelo, precio, stock){
        this.modelo = modelo;
        this.precio = Number(precio);
        this.stock = stock;
        this.vendido = false;
    }
    cantidadStock(cantidad){ 
        this.stock = this.stock - cantidad;
    }
    aumentarPrecio(){
        let aumento = parseInt(prompt("Ingrese el aumento en %"))
        this.precio = (this.precio * (1+(aumento/100)))
    }
    vender(){
        this.vendido = true 
    }
}



//----------- AGREGANDO PRODUCTOS  ---------//

let productos = [];
//REMERAS
productos.push(new Producto("1) Remera Clásica", 2300,20));  
productos.push(new Producto("2) Remera Estampada", 4000,12));
productos.push(new Producto("3) Remera bordada", 4700,5));
//GORRAS
productos.push(new Producto("1) Gorra con logo", 2000,2));
productos.push(new Producto("2) Gorra bordada", 2300,5));
productos.push(new Producto("3) Gorra lisa", 1700,10));
//PANTALONES
productos.push(new Producto("1) Pantalon jogger", 200,7));
productos.push(new Producto("2) Pantalon jean", 500,7));
productos.push(new Producto("3) Pantalon jean clásico", 470,15));



let categorias
function mostrarRemeras(){
    categorias = productos.filter((productos)=> productos.modelo.includes("Remera"))
    mostrarListaOrdenada();  
}
function mostrarGorras(){
    categorias = productos.filter((productos)=> productos.modelo.includes("Gorra"))
    console.log(categorias)
    mostrarListaOrdenada();  
}
function mostrarPantalones(){
    categorias = productos.filter((productos)=> productos.modelo.includes("Pantalon"))
    console.log(categorias)
    mostrarListaOrdenada(); 
}
function mostrar(){
    productos.forEach((producto) =>{
     modelo = prompt(producto.modelo)
    })
}
//----------- PROCESO DE COMPRA ---------//

const sumarEnvio = () =>{
    if (total <= 4000){
        total = total + 500;
    }else{
        alert("El envío es gratis")
    }
}

let eleccion
let productoFiltrado
let cantidad
const mostrarListaOrdenada = () => {
    productoFiltrado = [];
    categorias.forEach( producto => productoFiltrado.push(producto.modelo+" $"+producto.precio));
    eleccion = parseInt(prompt("¿Qué te gustaría elegir?\nLista de precios: "+"\n"+productoFiltrado.join("\n")));
    console.log(eleccion)
        
    switch(eleccion){
            case 1: eleccion = productoFiltrado[0]
                break;
            case 2: eleccion = productoFiltrado[1]
                break;
            case 3: eleccion = productoFiltrado[2]
                break;
            default: alert("Ingrese un producto valido")
                mostrarListaOrdenada();
                break;
        }
        
        
        cantidad = parseInt(prompt("¿Cuantos desea comprar del producto? "+ "\n" + eleccion ))
        console.log(productoFiltrado[producto].modelo)
        
    comprar();
};

const comprar = () => {
        
}

let producto 
let precio = 0;

    do{
        producto = parseInt(prompt("Bienvenido a TiendaJS, ¿Qué desea comprar? \n 1) Remeras \n 2) Gorras \n 3) Pantalones \n 4) Salir"));

        switch(producto) {
            case 1: mostrarRemeras();
                break;
            case 2: mostrarGorras();
                break;
            case 3: mostrarPantalones();
                break;
        }
    }
    
    while (producto != 4)