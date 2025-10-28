let number = parseInt(prompt("Ingrese un numero: "));

const esPositivo = (number) => {
    if (number > 0){
        return true;
    }
    else
        return false;
};

console.log(esPositivo(number));