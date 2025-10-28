let base = parseFloat(prompt("Ingrese el valor de la base:"));
let altura = parseFloat(prompt("Ingrese el valor de la altura:"));

function areaRectangulo(base, altura) {
    area = base * altura;
    return area;
}

console.log("El area del rectangulo es: " + areaRectangulo(base, altura));