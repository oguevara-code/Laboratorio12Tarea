let a = parseInt(prompt("Ingrese el primer numero:"));
let b = parseInt(prompt("Ingrese el segundo numero:"));

function esMultiplo(a, b) {
    if (a%b == 0){
      return a + " es multiplo de " + b;  
    }else{
       return a + " no es multiplo de " + b;  
    }
}

console.log(esMultiplo(a, b));