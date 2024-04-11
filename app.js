//capturar el mensaje que el usuario esta escribiendo 
const textArea= document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//Funcion del boton encriptar
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage="none"
}

function encriptar(stringEncriptada ){
    //array ó diccionario
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //Para que solo acepte minusculas
    stringEncriptada= stringEncriptada.toLowerCase()
    //para recorrer la matriz con un ciclo for
    for (let i = 0; i < matrizCodigo.length; i++) {
        //verificacion del array y las letras ingresadas
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            //Ir cambiando una cadena de caracteres por otra
            //se va a cambiar matrizCodigo posicion [i][0] por [i][1]
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

//Funcion del boton Desencriptar
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage="none"
}

function desencriptar(stringDesencriptada ){
    //array ó diccionario
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    //Para que solo acepte minusculas
    stringEncriptada= stringDesencriptada.toLowerCase()
    //para recorrer la matriz con un ciclo for
    for (let i = 0; i < matrizCodigo.length; i++) {
        //verificacion del array y las letras ingresadas
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            //Ir cambiando una cadena de caracteres por otra
            //se va a cambiar matrizCodigo posicion [i][0] por [i][1]
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

//Funcion del boton Copiar
function btnCopiar(){
    // Obtener el elemento textarea por su id
    let textarea = document.getElementById("unico");
    // Seleccionar el texto dentro del textarea
    textarea.select();
    // Copiar el texto seleccionado al portapapeles usando la API del portapapeles
    navigator.clipboard.writeText(textarea.value)
    .then(() => {
      // Mostrar un mensaje de éxito
      console.log("Texto copiado con éxito");
    })
    .catch((error) => {
      // Mostrar un mensaje de error
      console.error("Error al copiar el texto: " + error);
    });
}

function actualizarPagina() {
    // Obtener el elemento textarea por su id
    let textarea = document.getElementById("textarea");
    // Recargar la página usando el método window.location.reload()
    window.location.reload();
  }
  