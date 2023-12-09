const DESTINOS = [
    { id: 1, paquete: "Bariloche", precio: 300000 },
    { id: 2, paquete: "Mendoza", precio: 200000 },
    { id: 3, paquete: "Cataratas", precio: 350000 },
    { id: 4, paquete: "El Calafate", precio: 500000 }
];

function agregarAlCarrito(id, paquete, precio) {
    const CARRITO = JSON.parse(localStorage.getItem(`carrito`)) || [];
    CARRITO.push({ id, paquete, precio });
    localStorage.setItem(`carrito`, JSON.stringify(CARRITO));
    verCarrito();
};

function verCarrito() {
    const CARRITO = JSON.parse(localStorage.getItem('carrito')) || [];
    const VIAJES = document.getElementById('viajes');
    const totalElement = document.getElementById('total');
    let total = 0;

    VIAJES.innerHTML = '';

    CARRITO.forEach(item => {
        const LISTADO_DESTINOS = document.createElement('li');
        LISTADO_DESTINOS.innerHTML = `
            <span>${item.paquete}</span>
            <span>${item.precio}</span>
            <button onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        VIAJES.appendChild(LISTADO_DESTINOS);
        total += item.precio;
    });

    totalElement.textContent = total;
}

function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(item => item.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    verCarrito();
}



class Destino {
    constructor(id, paquete, precio, img) {
        this.id = id;
        this.paquete = paquete;
        this.precio = precio;
        this.img = img;
    }
}

function tarjetaDestinos() {
    const CONTENEDOR_DESTINOS = document.getElementById(`contenedorDestinos`);


const BARILOCHE = new Destino(1,"Bariloche", 300000, "./src/bariloche.png");
const MENDOZA = new Destino(2,"Mendoza", 200000, "./src/mendoza.jpg");
const CATARATAS = new Destino(3,"Cataratas", 350000, "./src/cataratas.jpg");
const ELCALAFATE = new Destino(4,"El Calafate", 500000, "./src/calafate.jpg");

const ArrayDestinos = [BARILOCHE, MENDOZA, CATARATAS, ELCALAFATE];

ArrayDestinos.forEach(destino => {
    const DIV = document.createElement(`div`);
    DIV.className = "card";
    DIV.innerHTML = `<div class="card" style="width: 20rem;">
        <img src="${destino.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${destino.paquete}</h3>
          <h3 class="card-title">${destino.precio}</h3>
          <p class="card-text">Disfruta tu próximo destino.</p>
          <button onclick="agregarAlCarrito(${destino.id}, '${destino.paquete}', ${destino.precio})" class="btn btn-primary">Agregar al carrito</button>

        </div>
      </div>
         `;
    CONTENEDOR_DESTINOS.appendChild(DIV);

});
}

verCarrito();
tarjetaDestinos();