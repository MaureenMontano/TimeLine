const btn = document.getElementById("btn");
const container = document.querySelector(".wrapper");

const movimientos = [
  {
    responsable: "Ventanilla Electrónica",
    fecha: "2022-10-03",
    descripcion:
      "Ventanilla Electrónica envió una solicitud al sistema de pruebas con laboratorios externos.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-04",
    descripcion:
      "Técnico DNM recibió una solicitud desde Ventanilla Electrónica.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-05",
    descripcion: "Técnico DNM acepta la solicitud.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-06",
    descripcion:
      "Técnico DNM elige laboratorio para realizar la prueba de análisis.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-07",
    descripcion:
      "Técnico DNM envía solicitud de cotización a laboratorio externo.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-08",
    descripcion: "Laboratorio externo recibe solicitud de cotización.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-09",
    descripcion:
      "Laboratorio externo verifica la factibilidad de la prueba a realizar análisis de laboratorio.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-10",
    descripcion:
      "Laboratorio externo responde la solicitud con una respuesta factible.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-11",
    descripcion:
      "Técnico DNM recibe la respuesta de la cotización del laboratorio externo.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-12",
    descripcion:
      "Técnico DNM envía las muestras necesarias al laboratorio externo.",
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-13",
    descripcion:
      "Laboratorio externo recibe las muestras para su debido análisis.",
  },
  
  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-14",
    descripcion: "Laboratorio externo inicia con el proceso de análisis del producto."
  },

  {
    responsable: "Laboratorio externo",
    fecha: "2022-10-29",
    descripcion:
      "Laboratorio externo finaliza el análisis y envía los resultados al Técnico DNM",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-30",
    descripcion:
      "Técnico DNM recibe mediante una solicitud los resultados del análisis de laboratorio.",
  },

  {
    responsable: "Técnico DNM",
    fecha: "2022-10-31",
    descripcion:
      "Técnico DNM envía los resultados a la ventanilla electrónica DNM.",
  },
];

let filter = "DESC";

function addCards(items) {
  //console.log(filter, items);
  container.innerHTML = "";

  const line = `
    <div class="center-line">
      <a href="#" class="scroll-icon"><i class="bi bi-chevron-up"></i></a>
    </div>
  `;

  container.innerHTML = line;

  let template = ``;

  items.forEach((movimiento, index) => {
    const movimientoCard = document.createElement("div");
    movimientoCard.innerHTML = "";

    if (index % 2 == 0) {
      movimientoCard.classList.add("row", "row-1");
    } else {
      movimientoCard.classList.add("row", "row-2");
    }

    template = `
    <section class="card">
        <i class="icon fas fa-home"></i>
        <div class="details">
            <span class="title">${movimiento.responsable}</span>
            <span>${movimiento.fecha}</span>
        </div>
        <p>${movimiento.descripcion}</p>
    </section>
    `;

    movimientoCard.innerHTML = template;

    container.append(movimientoCard);
  });
}

cambiarOrden();

btn.addEventListener("click", cambiarOrden);

function cambiarOrden() {
  let movNew;
  if (filter === "ASC") {
    movNew = movimientos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    filter = "DESC";
    btn.textContent = "Descendente";
  } else {
    movNew = movimientos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    filter = "ASC";
    btn.textContent = "Ascendente";
  }
  console.log(movNew);
  addCards(movNew);
}
