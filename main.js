let llaves = {   
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat" 
};


function encriptar(texto) {
  return texto.replace(/[aeiou]/g, function(match) { //modificador global
    return llaves[match];
  });
}


//encriptar
function procesar() {
  let entrada = document.getElementById("textoOriginal");
  let salida = document.getElementById("textoEncriptado");
  let texto = entrada.value;

  if (texto.trim() === "") {
    mostrarNotificacion("Ingresa un texto");
    return;
  }

  let resultado = encriptar(texto);
  salida.value = resultado;
  mostrarNotificacion("Texto encriptado correctamente");
}


//COPIAR
function procesarBotonCopiar() {
  let texto = document.getElementById("textoEncriptado").value.trim();
  if (!texto) {
    notificarNadaQueCopiar();
    return;
  }
  copiarAlPortapapeles();
}


function copiarAlPortapapeles() {
  let texto = document.getElementById("textoEncriptado").value;

  if (texto.trim() === "") {
    return;
  }

  navigator.clipboard.writeText(texto)
    .then(() => {
      mostrarNotificacion("Texto copiado");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}

