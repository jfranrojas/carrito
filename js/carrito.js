//----- CLASE PARA CONSTRUIR PRODUCTO -----//

class Producto {
    constructor(nombre, modelo, precio, talle, stock){
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = Number(precio);
        this.talle = talle;
        this.stock = stock;
        this.vendido = false;
    }
    cantidadStock(cantidad){ 
        this.stock = this.stock - cantidad;
    }
    sumarEnvio(){
        if (precio <= 5000){
            this.precio = this.precio + 500;
        }else{
            this.precio = this.precio;
        }
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
productos.push(new Producto(1, "1) Remera Clásica", 2300, "L",20)); 
productos.push(new Producto(1, "2) Remera Clásica", 2300, "L",10)); 
productos.push(new Producto(1, "3) Remera Estampada", 4000, "L",12));
productos.push(new Producto(1, "4) Remera bordada", 4700, "L",5));
//GORRAS
productos.push(new Producto(2, "1) Gorra con logo", 2000, "M",2));
productos.push(new Producto(2, "2) Gorra bordada", 2300, "M",5));
productos.push(new Producto(2, "3) Gorra lisa", 1700, "L",10));
//PANTALONES
productos.push(new Producto(3,"1) Pantalon jogger", 4500, 40,5));
productos.push(new Producto(3,"2) Pantalon jean", 5000, 42,7));
productos.push(new Producto(3,"3) Pantalon jean clásico", 4700, 42,15));



let categorias
function mostrarRemeras(){
    categorias = productos.filter((productos)=> productos.nombre == 1)
    console.log(categorias)
    mostrarListaOrdenada();  
}
function mostrarGorras(){
    categorias = productos.filter((productos)=> productos.nombre == 2)
    console.log(categorias)
    mostrarListaOrdenada();  
}
function mostrarPantalones(){
    categorias = productos.filter((productos)=> productos.nombre == 3)
    console.log(categorias)
    mostrarListaOrdenada(); 
}
function mostrar(){
    productos.forEach((producto) =>{
     modelo = prompt(producto.modelo)
    })
}
//----------- PROCESO DE COMPRA ---------//

let eleccion
let productoFiltrado = [];
let cantidad
const mostrarListaOrdenada = () => {
    let productosFiltrado = []
    categorias.forEach( producto => productosFiltrado.push(producto.modelo+" $"+producto.precio));
    eleccion = prompt("¿Qué te gustaría elegir?\nLista de precios: "+"\n"+productosFiltrado.join("\n"));
    
        if(eleccion == "" || isNaN(eleccion)) {
        alert("Elija una opción válida")
        mostrarListaOrdenada()
        }
        else{
        cantidad = parseInt(prompt("¿Cuantos desea comprar del producto?"))
        }
    comprar();
};

const comprar = () => {
        // FUNCION DE COMPRA, NO SE COMO TRAERME LA CANTIDAD DE PRODUCTOS ELEGIDOS Y MULTIPLICARLOS POR EL PRECIO
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