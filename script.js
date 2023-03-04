

class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const branding = new Producto ("Branding", 1000);
const frontend = new Producto ("Frontend", 1500);
const UXUI = new Producto ("UxUi", 2200);
const descuentoNum = 0.8;
const divCarritoCard = document.getElementById("divCarrito")
const div = document.createElement("div");

let arrayCarrito = [0];
let arrayServicios = [];
console.log("El carrito tiene: $"+ arrayCarrito)

let btnClickServiciosBrandingCarrito = document.getElementById("btnClickServiciosBrandingCarrito");
btnClickServiciosBrandingCarrito.addEventListener("click", btnClickBrandingCarritoResp);

let btnClickServiciosFrontendCarrito = document.getElementById("btnClickServiciosFrontendCarrito");
btnClickServiciosFrontendCarrito.addEventListener("click", btnClickFrontendCarritoResp);

let btnClickServiciosUxUiCarrito = document.getElementById("btnClickServiciosUxUiCarrito");
btnClickServiciosUxUiCarrito.addEventListener("click", btnClickUxUiCarritoResp);

let btnVaciarCarrito = document.getElementById("btnVaciarCarrito");
btnVaciarCarrito.addEventListener("click", btnVaciarCarritoResp);

carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
if(carritoLocalStorage == null){
    let arrayCarrito = localStorage.getItem("carritoLocalStorageNum");
    console.log("carrito vacío")
    console.log(arrayCarrito);
    if(arrayCarrito == null){
        console.log("es null")
        totalCarrito();
    }else{
        console.log("no es null")
    };
} else {
    console.log("lleno");
    arrayServicios = carritoLocalStorage;
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    totalCarrito();
    console.log(arrayServicios);
};
function totalCarrito(){
    carritoTotal.innerHTML=""
    let div = document.createElement("div");
    let arrayCarrito = localStorage.getItem("carritoLocalStorageNum");
    if(arrayCarrito == null){
        console.log("es null")
        div.className = "carritoTotalDiv";
        div.innerHTML= `<p>0</p>`;
        carritoTotal.appendChild(div);
        console.log("El total a pagar es de:");
        console.log(arrayCarrito); 
    }else{
        console.log("no es null")
        div.className = "carritoTotalDiv";
        div.innerHTML= `<p>${arrayCarrito}</p>`;
        carritoTotal.appendChild(div);
        console.log("El total a pagar es de:");
        console.log(arrayCarrito); 
    };
    /*     
    div.className = "carritoTotalDiv";
    div.innerHTML= `${arrayCarrito}`;
    carritoTotal.appendChild(div);
    console.log("El total a pagar es de:");
    console.log(arrayCarrito); 
    */
};

function guardarCarritoNumLocalStorage(){
    localStorage.setItem( "carritoLocalStorageNum", arrayCarrito);
    carritoLocalStorageNum = localStorage.getItem("carritoLocalStorageNum");
};
function guardarArrayServiciosLocalStorage(){
    localStorage.setItem( "carritoLocalStorage", JSON.stringify(arrayServicios));
    carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
};

function btnClickBrandingCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(branding);
    console.log("■ ■ Método reduce carrito ■ ■");
    arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
    console.log("carrito tiene");
    console.log(arrayCarrito);
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    console.log(arrayServicios);

    guardarCarritoNumLocalStorage();
    guardarArrayServiciosLocalStorage();
    totalCarrito();

}
function btnClickFrontendCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(frontend);
    console.log("■ ■ Método reduce carrito ■ ■");
    arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
    console.log(arrayCarrito);
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    console.log(arrayServicios);

    guardarCarritoNumLocalStorage();
    guardarArrayServiciosLocalStorage();
    totalCarrito();
}
function btnClickUxUiCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(UXUI);
    console.log("■ ■ Método reduce carrito ■ ■");
    arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
    console.log(arrayCarrito);
    divCarritoCard.innerHTML=""
    arrayServicios.forEach(producto => {
        let div = document.createElement("div");
        div.className = "divCarritoServicio";
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
    console.log(arrayServicios);
    guardarCarritoNumLocalStorage();
    guardarArrayServiciosLocalStorage();
    totalCarrito()
}
function btnVaciarCarritoResp(){
    console.log("Vaciar carrito");
    divCarritoCard.innerHTML=""
    arrayServicios = [];
    localStorage.clear("carritoLocalStorage");
    localStorage.clear("carritoLocalStorageNum");
    carritoLocalStorage = localStorage;
    console.log(arrayServicios);
    console.log(carritoLocalStorage)
    totalCarrito();
}
function carritoCards(){
/*     div.innerHTML="" */
    arrayServicios.forEach(producto => {
        div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>`;
    
                        divCarritoCard.appendChild(div);
    });
}

function descuento(arrayCarrito, descuentoNum,){
    arrayCarrito = arrayCarrito * descuentoNum;
    return arrayCarrito;
}

function descuentoPreg(arrayCarrito,arrayServiciosString){
    if (prompt(`Está por adquirir el/los servicio/s de: `+ arrayServiciosString + ` por un total de $${arrayCarrito}` +`, ingrese código de descuento, de no disponer de uno deje en blanco (cod: 1234)`) == 1234){
        arrayCarrito = [parseInt(descuento(arrayCarrito, descuentoNum))];
        alert(`Descuento aplicado, total a pagar: $`+ arrayCarrito);
        console.log("Descuento aplicado, total a pagar: $", arrayCarrito);
        return arrayCarrito;
    } else {
        alert(`Total a pagar: $${arrayCarrito}`);
        console.log(`No se aplicó el descuento, total a pagar: $${arrayCarrito}`);
    }
};

function seguirComprando(){

    console.log("■ ■ Método map ■ ■");
    const arrayServiciosMap = arrayServicios.map((producto)=>{
        return producto.nombre;
    });
    console.log(arrayServiciosMap);

    console.log("■ ■ Método join ■ ■");
    let arrayServiciosString = arrayServiciosMap.join(" | ");
    console.log(arrayServiciosString);


    if (prompt(`Se añadió el servicio al carrito, desea adquirir algún otro? (s/n)`) == "s"){
        compraItem();
    } else {
        descuentoPreg(arrayCarrito,arrayServiciosString);
    }
};

//Esto es para cambiar los precios automáticamente solo con cambiar los const del principio del script.js :D
servicioBrandingPrecio.innerHTML = "$" + branding.precio;
servicioFrontendPrecio.innerHTML = "$" + frontend.precio;
servicioUxUiPrecio.innerHTML = "$" + UXUI.precio;