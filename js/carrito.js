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
productos.push(new Producto("Remera", "Remera Clásica", 2300, "L",20)); 
productos.push(new Producto("Remera", "Remera Clásica", 2300, "L",10)); 
productos.push(new Producto("Remera", "Remera Estampada", 4000, "L",15));   
productos.push(new Producto("Remera", "Remera bordada", 4700, "L",5));
//GORRAS
productos.push(new Producto("Gorra", "Gorra con logo", 2000, "M",2));
productos.push(new Producto("Gorra", "Gorra bordada", 2300, "M",5));
productos.push(new Producto("Gorra", "Gorra lisa", 1700, "L",10));
//PANTALONES
productos.push(new Producto("Pantalon","Pantalon jogger", 4500, 40,5));
productos.push(new Producto("Pantalon","Pantalon jean", 5000, 42,7));
productos.push(new Producto("Pantalon","Pantalon jean clásico", 4700, 42,15));



const mostrarListaOrdenada = () => {
    const array = [];
    productos.forEach( producto => array.push(producto.modelo+" $"+producto.precio));
    alert(prompt("Lista de precios: "+"\n"+array.join("\n")));
};




function mostrarRemeras(){
    let remeras = productos.filter((productos)=> productos.nombre == "Remera")
    productos = remeras
    console.log(remeras)
    mostrarListaOrdenada();  
}
function mostrarGorras(){
    let gorras = productos.filter((productos)=> productos.nombre == "Gorra")
    productos = gorras
    console.log(gorras)
    mostrarListaOrdenada();  
}
function mostrarPantalones(){
    let pantalones = productos.filter((productos)=> productos.nombre == "Pantalon")
    productos = pantalones
    console.log(pantalones)
    mostrarListaOrdenada(); 
}
function mostrar(){
    productos.forEach((producto) =>{
     modelo = prompt(producto.modelo)
    })
}
//----------- PROCESO DE COMPRA ---------//

let producto 
let cantidad = 0;
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