let numero = parseInt(prompt("Ingrese un número: "));

function esPar(numero) {
    if (numero%2 == 0){
        return true;
    }
    else
        return false;
}

console.log(esPar(numero));