//crear un arreglo que se llame movimientos sort buscar// 

var btn = document.getElementById('btn')

function cambio()

btn.addEventListener('click')

const movimientos = [
    {
        responsable: "Ventanilla Electrónica",
        fecha: "3 de octubre de 2022",
        descripcion: "Ventanilla Electrónica envió una solicitud al sistema de pruebas con laboratorios externos.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "3 de octubre de 2022",
        descripcion: "Técnico DNM recibió una solicitud desde Ventanilla Electrónica.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "3 de octubre de 2022",
        descripcion: "Técnico DNM acepta la solicitud.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "3 de octubre de 2022",
        descripcion: "Técnico DNM elige laboratorio para realizar la prueba de análisis.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "3 de octubre de 2022",
        descripcion: "Técnico DNM envía solicitud de cotización a laboratorio externo.",
    },

    {
        responsable: "Laboratorio externo",
        fecha: "3 de octubre de 2022",
        descripcion: "Laboratorio externo recibe solicitud de cotización.",
    },

    {
        responsable: "Laboratorio externo",
        fecha: "3 de octubre de 2022",
        descripcion: "Laboratorio externo verifica la factibilidad de la prueba a realizar análisis de laboratorio.",
    },

    {
        responsable: "Laboratorio externo",
        fecha: "5 de octubre de 2022",
        descripcion: "Laboratorio externo responde la solicitud con una respuesta factible.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "5 de octubre de 2022",
        descripcion: "Técnico DNM recibe la respuesta de la cotización del laboratorio externo.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "5 de octubre de 2022",
        descripcion: "Técnico DNM envía las muestras necesarias al laboratorio externo.",
    },

    {
        responsable: "Laboratorio externo",
        fecha: "5 de octubre de 2022",
        descripcion: "Laboratorio externo recibe las muestras para su debido análisis.",
    },

//analisis en proceso

    {
        mensaje: "Análisis en proceso."
    },

    {
        responsable: "Laboratorio externo",
        fecha: "31 de octubre de 2022",
        descripcion: "Laboratorio externo finaliza el análisis y envía los resultados al Técnico DNM",
    },

    {
        responsable: "Técnico DNM",
        fecha: "31 de octubre de 2022",
        descripcion: "Técnico DNM recibe mediante una solicitud los resultados del análisis de laboratorio.",
    },

    {
        responsable: "Técnico DNM",
        fecha: "31 de octubre de 2022",
        descripcion: "Técnico DNM envía los resultados a la ventanilla electrónica DNM.",
    },

    {
        mensaje2: "Proceso finalizado."
    }

    //proceso finalizado
];

movimientos.sort()
console.log(movimientos);


