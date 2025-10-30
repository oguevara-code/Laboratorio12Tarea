function crearContador() {
  let contador = 0;

  return {
    incrementar: () => ++contador,
    resetear: () => (contador = 0)
  };
}

const miContador = crearContador();
console.log(miContador.incrementar());
console.log(miContador.incrementar());
console.log(miContador.resetear());