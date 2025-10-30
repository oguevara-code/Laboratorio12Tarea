function media(...numeros) {
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return numeros.length ? suma / numeros.length : 0;
}

console.log(media(4, 6, 8));  
console.log(media(10, 20, 30, 40));