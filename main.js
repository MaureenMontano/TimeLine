const btn = document.getElementById("btn");

let filter = "DESC";

btn.addEventListener("click", cambiarOrden);

const movimientos = [
  {
    responsable: "Ventanilla Electrónica",
    fecha: "2022-10-03",
    descripcion:
      "Ventanilla Electrónica envió una solicitud al sistema de pruebas con laboratorios externos.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-03",
    descripcion:
      "Técnico DNM recibió una solicitud desde Ventanilla Electrónica.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-03",
    descripcion: "Técnico DNM acepta la solicitud.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-03",
    descripcion:
      "Técnico DNM elige laboratorio para realizar la prueba de análisis.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-03",
    descripcion:
      "Técnico DNM envía solicitud de cotización a laboratorio externo.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-03",
    descripcion: "Laboratorio externo recibe solicitud de cotización.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-03",
    descripcion:
      "Laboratorio externo verifica la factibilidad de la prueba a realizar análisis de laboratorio.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-05",
    descripcion:
      "Laboratorio externo responde la solicitud con una respuesta factible.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-05",
    descripcion:
      "Técnico DNM recibe la respuesta de la cotización del laboratorio externo.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-05",
    descripcion:
      "Técnico DNM envía las muestras necesarias al laboratorio externo.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-05",
    descripcion:
      "Laboratorio externo recibe las muestras para su debido análisis.",
  },

  //analisis en proceso

  /* {
    mensaje: "Análisis en proceso.",
  }, */

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-31",
    descripcion:
      "Laboratorio externo finaliza el análisis y envía los resultados al Técnico DNM",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-31",
    descripcion:
      "Técnico DNM recibe mediante una solicitud los resultados del análisis de laboratorio.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-31",
    descripcion:
      "Técnico DNM envía los resultados a la ventanilla electrónica DNM.",
  },

  /* {
    mensaje2: "Proceso finalizado.",
  }, */

  //proceso finalizado
];

function cambiarOrden() {
  let movNew;
  if (filter === "ASC") {
    movNew = movimientos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    filter = 'DESC'
    btn.textContent = 'Descendente';
  } else {
    movNew = movimientos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    filter = 'ASC';
    btn.textContent = 'Ascendente';
  }

  console.log(movNew);
}
