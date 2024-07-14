const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const tiposError = [
    "valueMissing",
    "patternMissmatch",
    "tooShort",
    "customError",
	"typeMismatch"
];

const mensajes = {
nombre: {
    valueMissing: "El campo nombre no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un nombre válido.",
    tooShort: "Por favor, ingrese un nombre válido.",
},
email: {
    valueMissing: "El campo email no puede estar vacío.",
    typeMismatch: "Por favor, ingrese un email válido.",
    tooShort: "Por favor, ingrese un e-mail válido.",
},
asunto: {
    valueMissing: "El campo asunto no puede estar vacío.",
    patternMismatch: "Por favor, ingrese el asunto .",
    tooShort: "El campo no tiene caracteres suficientes.",
},
mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío.",
    patternMismatch: "Por favor, ingrese un mensaje.",
    tooShort: "El campo no tiene caracteres suficientes.",
}};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    email: e.target.elements["email"].value,
    asunto: e.target.elements["asunto"].value,
    mensaje: e.target.elements["mensaje"].value,
    
  };
  console.log(listaRespuestas);
});


camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
});



function verificarCampo(campo) {
    let mensaje = "";
    campo.setCustomValidity("");
    
    tiposError.forEach(error => {
        if (campo.validity[error]) {
            mensaje = mensajes[campo.name][error]
            console.log(mensaje);
        }
    })
    
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");                               const validarInputCheck = campo.checkValidity();
    
    if (!validarInputCheck) {
        mensajeError.textContent = mensaje;
    } else {
        mensajeError.textContent = "";
    }

}