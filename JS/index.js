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

if(pago === "1"){
    parseInt(alert("Vas a abonar un 10% menos en efectivo"));
}else if(pago === "2"){
   parseInt(alert("Abonando con tarjeta o transferencia es el mismo precio"));
}else{
    alert("Introducí las opciones 1 o 2 unicamente");
}