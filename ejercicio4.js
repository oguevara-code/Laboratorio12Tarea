let num1 = parseInt(prompt("Ingrese el primero numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));

function mayorDeTres(num1, num2, num3){
    if (num1>num2 && num1>num3){
        return num1;
    }else
        if (num2>num1 && num2>num3){
            return num2;
    }else{
            return num3;
    }
}
console.log("El numero mayor es: " + mayorDeTres(num1, num2, num3));