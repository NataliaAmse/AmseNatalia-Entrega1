let nombreIngresado = prompt("Ingresa tu nombre:");
let apellidoIngresado = prompt("Ingresa tu apellido:");

function saludar(nombre, apellido) {
    alert("Bienvenido " + nombre + " " + apellido);
}

saludar(nombreIngresado, apellidoIngresado);



let destino = prompt("¿A dónde queres viajar? Bariloche (1), Mendoza (2), Cataratas (3) y El Calafate (4)");

switch (destino) {
    case "1":
        alert("Elegiste de destino a Bariloche. El precio del paquete es de $300000");
        break;
    case "2":
        alert("Elegiste de destino a Mendoza. El precio del paquete es de $200000");
        break;
    case "3":
        alert("Elegiste de destino a Cataratas. El precio del paquete es de $350000");
        break;
    case "4":
        alert("Elegiste de destino a El Calafate. El precio del paquete es de $500000");
        break;
    default:
        alert("opción incorrecta. Por favor elegir opción 1, 2, 3 o 4");
        break;
}


let descuento = "1";
let precioDeLista = "2";

let pago = prompt("Si abonas con efectivo tenes un 10% de descuento. Si vas a abonar con efectivo responde: 1, si no vas a abonar con efectivo responde 2");

while (pago !== "1" && pago !== "2") {
    alert("Introducí las opciones 1 o 2 unicamente");
    pago = prompt("Si abonas con efectivo tenes un 10% de descuento. Si vas a abonar con efectivo responde: 1, si no vas a abonar con efectivo responde 2");
}

if (pago === "1") {
    (alert("Vas a abonar un 10% menos en efectivo"));
} else if (pago === "2") {
    (alert("Abonando con tarjeta o transferencia es el mismo precio"));
} else {
    alert("Introducí las opciones 1 o 2 unicamente");
}


const DESTINOS = [
    { paquete: "Bariloche", precio: 300000 },
    { paquete: "Mendoza", precio: 200000 },
    { paquete: "Cataratas", precio: 350000 },
    { paquete: "El Calafate", precio: 500000 }
]

function bonificacion(destino) {
    const DESCUENTO = 0.1;
    const PAQUETE_CON_DESC = destino.precio * (1 - DESCUENTO);
    alert(`El paquete ${destino.paquete}, con el descuento en efectivo te queda en: ${PAQUETE_CON_DESC}`)
};

DESTINOS.forEach(bonificacion);


class Destino {
    constructor(paquete, precio, img) {
        this.paquete = paquete;
        this.precio = precio;
        this.img = img;
    }
}

const BARILOCHE = new Destino("Bariloche", 300000, "./src/bariloche.png");
const MENDOZA = new Destino("Mendoza", 200000, "./src/mendoza.jpg");
const CATARATAS = new Destino("Cataratas", 350000, "./src/cataratas.jpg");
const ELCALAFATE = new Destino("El Calafate", 500000, "./src/calafate.jpg");

const ArrayDestinos = [BARILOCHE, MENDOZA, CATARATAS, ELCALAFATE];

ArrayDestinos.forEach(Destino => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<div class="card" style="width: 20rem;">
        <img src="${Destino.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${Destino.paquete}</h5>
          <h5 class="card-title">$${Destino.precio}</h5>
          <p class="card-text">Disfruta tu próximo destino.</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
         `
    contenedorDestinos.appendChild(div);
})


