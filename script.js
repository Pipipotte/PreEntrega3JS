

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
    console.log("carrito vacío")
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
    console.log(arrayServicios);
};

function btnClickBrandingCarritoResp(){
    console.log("Botón clickeado");
    arrayServicios.push(branding);
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
    localStorage.setItem( "carritoLocalStorage", JSON.stringify(arrayServicios));
    carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
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
    localStorage.setItem( "carritoLocalStorage", JSON.stringify(arrayServicios));
    carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
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
    localStorage.setItem( "carritoLocalStorage", JSON.stringify(arrayServicios));
    carritoLocalStorage = JSON.parse(localStorage.getItem("carritoLocalStorage"));
}
function btnVaciarCarritoResp(){
    console.log("Vaciar carrito");
    divCarritoCard.innerHTML=""
    arrayServicios = [];
    localStorage.clear("carritoLocalStorage");
    carritoLocalStorage = localStorage;
    console.log(arrayServicios);
    console.log(carritoLocalStorage)
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

function compraItem(){
    let compra = prompt("¿Qué servicio desea adquirir? ☛ Branding, Frontend, UX/UI, ");
    switch (compra) {
        case "branding":
            if (compra == "branding"){
                arrayServicios.push(branding);

                console.log( "Usted está por adquirir el siguiente servicio: " + branding.nombre + ", por el valor de: $" + branding.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + branding.nombre + ", por el valor de: $" + branding.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        case "frontend":
            if (compra == "frontend"){
                arrayServicios.push(frontend);

                console.log( "Usted está por adquirir el siguiente servicio: " + frontend.nombre + ", por el valor de: $" + frontend.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + frontend.nombre + ", por el valor de: $" + frontend.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);
                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        case "ux/ui":
            if (compra == "ux/ui"){
                arrayServicios.push(UXUI);

                console.log( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break
        case "uxui":
            if (compra == "uxui"){
                arrayServicios.push(UXUI);

                console.log( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        default:
            alert(`No ingresó un servicio del listado, intente de nuevo`);
            compraItem();
    } 
};

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

/* compraItem(); */

//Esto es para cambiar los precios automáticamente solo con cambiar los const del principio del script.js :D
ServicioBrandingPrecio.innerHTML = branding.precio;
ServicioFrontendPrecio.innerHTML = frontend.precio;
ServicioUxUiPrecio.innerHTML = UXUI.precio;

/* arrayServicios.forEach(producto => {

    let div = document.createElement("divCarrito");

    div.innerHTML= `<p> Servicio : ${producto.nombre} </p>
                    <p> Precio : ${producto.precio} </p>`;

                    divCarrito.appendChild(div);
}) */


/* 
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

let arrayCarrito = [0];
let arrayServicios = [];
console.log("El carrito tiene: $"+ arrayCarrito)

function descuento(arrayCarrito, descuentoNum,){
    arrayCarrito = arrayCarrito * descuentoNum;
    return arrayCarrito;
}

function compraItem(){
    let compra = prompt("¿Qué servicio desea adquirir? ☛ Branding, Frontend, UX/UI, ");
    switch (compra) {
        case "branding":
            if (compra == "branding"){
                arrayServicios.push(branding);

                console.log( "Usted está por adquirir el siguiente servicio: " + branding.nombre + ", por el valor de: $" + branding.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + branding.nombre + ", por el valor de: $" + branding.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        case "frontend":
            if (compra == "frontend"){
                arrayServicios.push(frontend);

                console.log( "Usted está por adquirir el siguiente servicio: " + frontend.nombre + ", por el valor de: $" + frontend.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + frontend.nombre + ", por el valor de: $" + frontend.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);
                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        case "ux/ui":
            if (compra == "ux/ui"){
                arrayServicios.push(UXUI);

                console.log( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break
        case "uxui":
            if (compra == "uxui"){
                arrayServicios.push(UXUI);

                console.log( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)
                alert( "Usted está por adquirir el siguiente servicio: " + UXUI.nombre + ", por el valor de: $" + UXUI.precio)

                console.log("■ ■ Método reduce carrito ■ ■");
                arrayCarrito = arrayServicios.reduce((acumulador, elemento)=> acumulador + elemento.precio, 0);
                console.log(arrayCarrito);

                seguirComprando(arrayServicios);
                return arrayCarrito;
            }
            break;
        default:
            alert(`No ingresó un servicio del listado, intente de nuevo`);
            compraItem();
    } 
};

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

compraItem();
 */