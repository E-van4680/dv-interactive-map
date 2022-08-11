var dive = document.getElementById("subselector");
var dive2 = document.getElementById("subselector2");

function config(id) {
  if (
    !dive.style.display ||
    (dive.style.display == "none" && dive2.style.display == "none")
  ) {
    dive.style.display = "block";
    dive2.style.display = "block";
  } else {
    dive.style.display = "none";
    dive2.style.display = "none";
  }
}

function handleClick(planeta, color) {
  if (document.getElementById("origen").checked) {
    document.getElementById("enter-origen").innerHTML = planeta;
    document.getElementById("tierra2").style.background = color;
  } else {
    document.getElementById("enter-destino").innerHTML = planeta;
    document.getElementById("tierra3").style.background = color;
  }
}

function sub(partida) {
  document.getElementById("subdisplay").innerHTML = partida;
}

function sub2(llegada) {
  document.getElementById("subdisplay2").innerHTML = llegada;
}

var pazoom = document.getElementById("pazoom");
var slider = document.getElementById("slider");

slider.addEventListener("change", function () {
  pazoom.style.zoom = this.value;
});

var swap = document.getElementById("swap");
var eo = document.getElementById("enter-origen");
var ed = document.getElementById("enter-destino");

swap.addEventListener("click", function () {
  let eo = document.getElementById("enter-origen");
  let ed = document.getElementById("enter-destino");

  let temp;

  temp = eo.innerHTML;
  eo.innerHTML = ed.innerHTML;
  ed.innerHTML = temp;
});

function calcular() {
  var dive = document.getElementById("subselector");

  var d = "Debes aumentar tu velocidad ";
  var resultado = document.getElementById("resultado");
  var sub = document.getElementById("subdisplay");
  var sub2 = document.getElementById("subdisplay2");
  var ac = ", aerocaptura posible";

  if (!dive.style.display || dive.style.display == "none") {
    if (eo.innerHTML == "Marte" && ed.innerHTML == "Tierra") {
      resultado.innerHTML = d + "2,1 km/s";
    } else if (eo.innerHTML == "Tierra" && ed.innerHTML == "Marte") {
      resultado.innerHTML = d + "3,6 km/s";
    } else if (eo.innerHTML == "Tierra" && ed.innerHTML == "Venus") {
      resultado.innerHTML = d + "3,49 km/s";
    } else if (eo.innerHTML == "Venus" && ed.innerHTML == "Tierra") {
      resultado.innerHTML = d + "3,3 km/s";
    } else if (eo.innerHTML == "Tierra" && ed.innerHTML == "Mercurio") {
      resultado.innerHTML = d + "5,55 km/s";
    } else if (eo.innerHTML == "Mercurio" && ed.innerHTML == "Tierra") {
      resultado.innerHTML = d + "7,53 km/s";
    } else if (eo.innerHTML == "Tierra" && ed.innerHTML == "Júpiter") {
      resultado.innerHTML = d + "6,3 km/s";
    } else if (eo.innerHTML == "Júpiter" && ed.innerHTML == "Tierra") {
      resultado.innerHTML = d + "17,29 km/s";
    } else if (eo.innerHTML == "Saturno" && ed.innerHTML == "Tierra") {
      resultado.innerHTML = d + "10,64 km/s";
    } else if (eo.innerHTML == "Tierra" && ed.innerHTML == "Saturno") {
      resultado.innerHTML = d + "6,87 km/s";
    } else {
      resultado.innerHTML = "no computado";
    }
  } else if (dive.style.display == "block") {
    if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "17,31 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "9,31 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "6,1 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "5,7 km/s";
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "13,71 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "5,71 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "2,5 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "2,1 km/s";
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "12,27 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "4,27 km/s" + ac;
    } else if (
      eo.innerHTML == "Marte" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      /* Tierra a Marte */
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "18,31 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "14,71 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "13,27 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "12,6 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "9,31 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "5,71 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "4,27 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "flyby/sobrevuelo"
    ) {
      resultado.innerHTML = d + "3,6 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "6,1 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "2,5 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "1,06 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Marte" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "0,39 km/s";

      /* Tierra a Venus*/
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "42,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "15,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "12,85 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "12,49 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "33,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "6,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "3,85 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "3,49 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "30,58 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "3,58 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "0,64 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Venus" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "0,28 km/s";

      /* Venus a Tierra*/
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "41,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "33,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "30,58 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "30,3 km/s";
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "14,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "6,79 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "3,58 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "3,3 km/s";
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "11,85 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "3,85 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "0,64 km/s" + ac;
    } else if (
      eo.innerHTML == "Venus" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "0,36 km/s";

      /* Mercurio a Tierra*/
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "24,14 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "16,14 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "12,93 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "10,59 km/s";
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "21,08 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "13,08 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "9,87 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "7,53 km/s";
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "19,86 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "11,86 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "8,65 km/s" + ac;
    } else if (
      eo.innerHTML == "Mercurio" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "6,31 km/s";

      /* Tierra a Mercurio */
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "25,14 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "22,08 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "20,86 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "14,55 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "16,14 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "13,08 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "11,86 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "5,55 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "12,93 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "9,87 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "8,65 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Mercurio" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "2,34 km/s";

      /* Tierra a Júpiter */
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Superficie de Júpiter?";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "32,59 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "15,57 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "15,3 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Superficie de Júpiter?";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "23,59 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "6,57 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "6,3 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Superficie de Júpiter?";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "20,38 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "3,36 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Júpiter" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "3,09 km/s";

      /* Júpiter a Tierra */
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Júpiter";
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Júpiter";
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Júpiter";
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Júpiter";
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "32,59 km/s" + ac;
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "23,59 km/s" + ac;
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "20,38 km/s" + ac;
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "17,29 km/s";
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "15,57 km/s" + ac;
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "6,57 km/s" + ac;
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "3,36 km/s" + ac;
    } else if (
      eo.innerHTML == "Júpiter" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "0,27 km/s";

      /* Saturno a Tierra */
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Saturno";
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Saturno";
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Saturno";
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = "Dudo que estés en la superficie de Saturno";
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "26,51 km/s" + ac;
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "17,51 km/s" + ac;
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "14,3 km/s" + ac;
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "10,64 km/s";
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = d + "16,29 km/s" + ac;
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "7,29 km/s" + ac;
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "4,08 km/s" + ac;
    } else if (
      eo.innerHTML == "Saturno" &&
      ed.innerHTML == "Tierra" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "0,42 km/s";

      /* Tierra a Saturno */
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Superficie de Saturno?";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "26,51 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "16,29 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Superficie" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "15,87 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Superficie de Saturno?";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "17,51 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "7,29 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita baja" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "6,87 km/s";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Superficie"
    ) {
      resultado.innerHTML = "Superficie de Saturno?";
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita baja"
    ) {
      resultado.innerHTML = d + "14,3 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Órbita de escape/captura"
    ) {
      resultado.innerHTML = d + "4,08 km/s" + ac;
    } else if (
      eo.innerHTML == "Tierra" &&
      ed.innerHTML == "Saturno" &&
      sub.innerHTML == "Órbita de escape/captura" &&
      sub2.innerHTML == "Flyby/Sobrevuelo"
    ) {
      resultado.innerHTML = d + "3,66 km/s";
    } else {
      resultado.innerHTML = "no computado";
    }
  }
}
