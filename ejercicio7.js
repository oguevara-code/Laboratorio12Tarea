let precio = parseFloat(prompt("Ingrese el precio: "));
let porcentaje = parseFloat(prompt("Ingrese el porcentaje: "));

const calcularDescuento = function(precio, porcentaje) {
  let descuento = precio * (porcentaje / 100);
  let precioFinal = precio - descuento;
  return precioFinal;
};

console.log("El precio con el descuento es: " + calcularDescuento(precio, porcentaje));