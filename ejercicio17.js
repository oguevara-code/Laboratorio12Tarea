function mostrarDatos(nombre, edad, ...hobbies) {
  console.log(`Nombre: ${nombre}`);
  console.log(`Edad: ${edad}`);
  console.log(`Hobbies: ${hobbies.join(', ')}`);
}

mostrarDatos("Omar", 18, "Programar", "Música", "Deportes");