
// Recuperarl los elementos del DOM
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const laborales = document.getElementById("laborales");


// Ejectar una función cuando se haga click en el botón
function festivos(parametro) {
  // Acceder a los valores de los inputs
  const diaValor = dayInput.value
  const mesValor = monthInput.value
  const aynoValor = yearInput.value

  // Crear una fecha con los valores de los inputs
  const fecha = new Date(aynoValor, mesValor - 1, diaValor);
  // Obtenemos el valorr del dia: 0 = domingo, 1 = lunes, 2 = martes, ...
  const diaIndex = fecha.getDay();

  // Comprobar si el dia es laboral o festivo
  let mensaje = ""
  switch (diaIndex) {
    case 0: case 6:
      mensaje = "Dia no laboral"
      break;
    default:
      mensaje = "Dia laboral"
  }

  // Imprimir el mensaje en el DOM
  laborales.textContent = mensaje;
}
