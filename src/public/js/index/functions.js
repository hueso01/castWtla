var socket = io();

const getParam = (name) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

//SEND URL TO RECEIVER
const sendMediaUrl = (url) => {
  socket.emit("stream", url);
};

function videoPlay() {
  socket.emit("events", "played", "");
}

function videoPause() {
  socket.emit("events", "paused", "");
}

const sendSeekChange = (valor) => {
  socket.emit("events", "seek", valor);
};

//RECEIVE URL FROM SENDER

//DURATION TIME
// function getDuration() {
socket.on("durationTime", (durationTime) => {
  document.querySelector(".durationTime").innerText =
    calculateTime(durationTime);
});
// }

//CURRENT TIME
// function getCurrentTime() {
socket.on("currentTime", (currentTime) => {
  // document.querySelector('.rangeTime').value = currentTime;
  document
    .querySelector(".progress-bar-normal")
    .setAttribute("value", currentTime);
  document.querySelector(".currentTimeSpan").innerText =
    calculateTime(currentTime);
});
// }

//CALCULATE TIME
function calculateTime(seconds) {
  var horas = Math.floor(seconds / 3600);
  horas = horas < 10 ? "0" + horas : horas;
  var minutos = Math.floor((seconds / 60) % 60);
  minutos = minutos < 10 ? "0" + minutos : minutos;
  var segundos = seconds % 60;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  return `${horas}:${minutos}:${segundos}`;
}
//CALCULATE TIME

//PARA RENOVAR LOS INPUTS
function renew() {
  if (document.querySelector("#pause").classList.contains("cls")) {
    document.querySelector("#pause").classList.remove("cls");
    document.querySelector("#play").classList.add("cls");
  }

  setTimeout(() => {
    document.querySelector(".progress-bar-normal").value = 0;
  }, 2000);
}

// function getAllQualitys() {
var array_qualities = [];
socket.on("quality", (Allqualities, quality) => {
  //RECORREMOS EL ARRAY DE QUALITIES
  var indice = -1;
  var qualityGet = quality;
  document.querySelector(".quality-menu").innerHTML = ``;
  Allqualities.forEach((q) => {
    indice++;
    var labelQ = q.label;
    var uu = indice == qualityGet ? "active-quality" : "";
    document.querySelector(
      ".quality-menu"
    ).innerHTML += `<span class="quality-op ${uu}" data-q="${indice}">${labelQ}</span>`;
  });
});
// }

//SET QUALITY == CAMBIAR CALIDAD
const setQuality = (quality) => {
  socket.emit("events", "setQuality", quality);
};

socket.on("state", (state) => {
  if (state == "paused") {
    if (!document.querySelector("#pause").classList.contains("cls")) {
      document.querySelector("#pause").classList.add("cls");
      document.querySelector("#play").classList.remove("cls");
    }
  }
});
