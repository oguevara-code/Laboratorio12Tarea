function procesarTexto(texto) {
  function limpiarEspacios(txt) {
    return txt.trim().replace(/\s+/g, ' ');
  }

  function contarPalabras(txt) {
    return txt.split(' ').length;
  }

  const textoLimpio = limpiarEspacios(texto);
  const totalPalabras = contarPalabras(textoLimpio);

  return `Texto limpio: "${textoLimpio}" | Palabras: ${totalPalabras}`;
}

console.log(procesarTexto("Hola  mundo desde JavaScript"));