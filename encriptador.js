function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let android = document.getElementById("muñeco");
    let mensaje = document.getElementById("mensajeencriptado"); // Obtén el textarea para el mensaje
    
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (document.getElementById("texto").value.length != 0) {
        // Actualiza el contenido del textarea "mensaje"
        document.getElementById("texto").value = textoCifrado;
        document.getElementById("tituloMensaje").textContent = "Texto encriptado con éxito";
        document.getElementById("parrafo").textContent = "";
        // Cambia la imagen al momento de encriptar
        document.getElementById("muñeco.png").src = "./img/muñeco.png";
        } else {
        document.getElementById(android).src = "./img/android.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        tituloMensaje.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
        }
    
    }
    
    function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulomensaje");
    let parrafo = document.getElementById("parrafo");
    let android = document.getElementById("android");
    let mensaje = document.getElementById("mensajeencriptado"); // Obtén el textarea para el mensaje
    
    let textoDescifrado = texto
    .replace(/ufat/gi, "u")
    .replace(/ober/gi, "o")
    .replace(/ai/gi, "a")
    .replace(/imes/gi, "i")
    .replace(/enter/gi, "e");
    
    if (texto.trim().length != 0) {
    // Actualiza el contenido del textarea "mensaje"
    mensaje.innerHTML = textoDescifrado;
    document.getElementById("tituloMensaje").textContent = "Texto desencriptado con éxito";
    document.getElementById("parrafo").textContent = "";
    // Cambia la imagen al momento de desencriptar
    document.getElementById("android").src = "./img/android1.png";
    } else {
    document.getElementById("android").src = "./img/android.png";
    alert("Debes ingresar algún texto");
    }
    }
    
    function copiar() {
    let texto = document.getElementById("texto").value;
    navigator.clipboard.writeText(texto)
    .then(() => {
    document.getElementById("tituloMensaje").textContent = "Texto copiado al portapapeles";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("android").src = "./img/android1.png";
    })
    .catch(err => {
    console.error("Failed to copy: ", err);
    });
    }