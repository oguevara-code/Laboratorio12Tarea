const convertirAMayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";

const componerTransformaciones = (func1, func2) => {
  return (texto) => {

    const intermedio = func1(texto);
    return func2(intermedio);
  };
};

const transformar = componerTransformaciones(convertirAMayusculas, agregarSigno);

console.log(transformar("hola"));
console.log(transformar("javascript"));