function filtrarArreglo(arr, callback) {
  return arr.filter(callback);
}

const numeros = [1, 2, 3, 4, 5, 6];
const pares = filtrarArreglo(numeros, n => n % 2 === 0);
console.log(pares);