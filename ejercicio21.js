function potencia(base, exponente) {
  if (exponente === 0) return 1;   
  if (exponente < 0) return 1 / potencia(base, -exponente);
  return base * potencia(base, exponente - 1); 
}

console.log(potencia(2, 3)); 
console.log(potencia(5, 0));  
console.log(potencia(2, -2));