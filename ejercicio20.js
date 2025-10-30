function descargarArchivo(url, callback) {
  console.log("Descargando...");
  setTimeout(() => {
    callback(`Descarga completa de ${url}`);
  }, 2000);
}

descargarArchivo("https://archivo.com/datos.txt", (mensaje) => {
  console.log(mensaje);
});