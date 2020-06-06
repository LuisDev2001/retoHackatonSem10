function typeOf(dato) {
  let proceso = typeof dato;
  return console.log(`El dato ${dato} es ${proceso} `);
}

let cadena = "Luis";
numero = 18;
lista = [1.1, "Luis", 12];
usuario = {
  name: "Juan",
  lastname: "Perez",
};

typeOf(cadena);
typeOf(numero);
typeOf(lista);
typeOf(usuario);
