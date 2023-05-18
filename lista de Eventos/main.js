/* Evento Wheel */
var contenedor1 = document.getElementById("contenedor1");
var contenedor2 = document.getElementById("contenedor2");
var texto = document.getElementById("texto");

contenedor1.addEventListener("wheel", function (event) {
  // Verificar si se desplaza hacia arriba o abajo
  var delta = event.deltaY > 0 ? 1 : -1;

  // Ajustar la altura del segundo contenedor
  var nuevaAltura = contenedor2.offsetHeight + delta * 30;
  if (nuevaAltura >= 100 && nuevaAltura <= 500) {
    contenedor2.style.height = nuevaAltura + "px";

    // Cambiar el texto según la altura del contenedor2
    if (nuevaAltura < 200) {
      texto.textContent = "Soy pequeño";
    } else if (nuevaAltura >= 200 && nuevaAltura < 480) {
      texto.textContent = "Creciendo...";
      
    } else {
      texto.textContent = "Soy grande";
    }
  }

  // Evitar el desplazamiento predeterminado del contenedor principal
  event.preventDefault();
});


/* evento de click an dblclick */


var miDiv = document.getElementById("miDiv");
var aumentarBtn = document.getElementById("aumentarBtn");
var disminuirBtn = document.getElementById("disminuirBtn");
var escala = 1;

function actualizarTexto() {
  miDiv.textContent = "Escala actual: " + Math.round(escala * 100) + "%";
}

aumentarBtn.addEventListener("click", function() {
  escala += 0.1;
  if (escala > 2) {
    escala = 2;
  }
  miDiv.style.transform = "scale(" + escala + ")";
  actualizarTexto();
});

aumentarBtn.addEventListener("dblclick", function(event) {
  escala += 0.2;
  if (escala > 2) {
    escala = 2;
  }
  miDiv.style.transform = "scale(" + escala + ")";
  actualizarTexto();
});

disminuirBtn.addEventListener("click", function() {
  escala -= 0.1;
  if (escala < 0.5) {
    escala = 0.5;
  }
  miDiv.style.transform = "scale(" + escala + ")";
  actualizarTexto();
});

disminuirBtn.addEventListener("dblclick", function(event) {
  escala -= 0.2;
  if (escala < 0.5) {
    escala = 0.5;
  }
  miDiv.style.transform = "scale(" + escala + ")";
  actualizarTexto();
});

actualizarTexto();


//Evento MOUSEOVER

const contenedor4 = document.getElementById("contenedor4");
const tocame = document.getElementById("tocame");

contenedor4.addEventListener("mouseover", () => {
  tocame.innerHTML = "Me estás tocando";
});
contenedor4.addEventListener("mouseout", () => {
  tocame.innerHTML = "Me dejaste de tocar";
});