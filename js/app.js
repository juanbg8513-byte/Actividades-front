// 2. Declaración de constantes con tus datos
const nombre = "Juan Leon";
const edad = 18;
const ciudad = "Armenia";

// 3. Uso de Template Literal
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);

// 4. Muestra en consola el tipo de dato usando typeof
console.log("Tipo de 'nombre':", typeof nombre);
console.log("Tipo de 'edad':", typeof edad);
console.log("Tipo de 'ciudad':", typeof ciudad);

// 5. Variable anioActual y cálculo de nacimiento
const anioActual = 2026;
const anioNacimiento = anioActual - edad;
console.log(`Año aproximado de nacimiento: ${anioNacimiento}`);

// 6. Experimento con tipos de datos
const edadTexto = "19";
console.log("Resultado de edadTexto + 1:", edadTexto + 1);
console.log("Resultado de Number(edadTexto) + 1:", Number(edadTexto) + 1);

/*
EXPLICACIÓN EN COMENTARIO:
1. 'edadTexto + 1' da "191" porque junta el texto "19" con el "1" (concatenación).
2. 'Number(edadTexto) + 1' da 20 porque convierte el texto a número y los suma matemáticamente.
*/