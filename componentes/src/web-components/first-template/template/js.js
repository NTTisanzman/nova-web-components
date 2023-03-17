const plantilla = document.importNode(document.getElementById("mensaje"), true);
let main = document.querySelector(".main");

let mensajeOk = plantilla.content.cloneNode(true);
let mensajeError = plantilla.content.cloneNode(true);

mensajeOk.querySelector(".msg-icon").src = "ok-icon.png"
main.appendChild(mensajeOk);

mensajeError.querySelector(".msg-icon").src = "error-icon.png"
main.appendChild(mensajeError);
