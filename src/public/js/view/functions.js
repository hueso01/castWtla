///SHOW AVISO
function showAviso(text, valor) {
  setTimeout(() => {
    document.querySelector(".messages").innerText = text + " " + valor;
    document.querySelector(".messages").classList.add("showMessage");
  }, 1000);
  setTimeout(() => {
    document.querySelector(".messages").classList.remove("showMessage");
    document.querySelector(".messages").innerText = "";
  }, 6000);
}

function doAction(play, time, playerInstance) {
  //PARA REPRODUCIR
  if (play == "played") {
    playerInstance.play();
  }

  //PARA PAUSAR
  if (play == "paused") {
    playerInstance.pause();
  }

  //PARA PANTALLA COMPLETA
  if (play == "fullscreenAction") {
    document.querySelector(".jw-icon-fullscreen").click();
  }

  //PARA CAMBIAR POSITION
  if (play == "seek") {
    playerInstance.seek(time);
  }

  if (play == "setQuality") {
    playerInstance.setCurrentQuality(time);
    showAviso("Cambiando calidad ", "");
  }
}

function sendDuration(playerInstance) {
  setTimeout(function () {
    var duracion = playerInstance.getDuration();
    socket.emit("durationTime", Math.floor(duracion));
  }, 3000);
}

function sendQualities(playerInstance) {
  var Allqualities = playerInstance.getQualityLevels();
  // var qualitysC = playerInstance.getCurrentQuality();
  var quality = playerInstance.getCurrentQuality();
  socket.emit("quality", Allqualities, quality);
}

function getState(playerInstance) {
  // setInterval(() => {
  // }, 2000);
  return playerInstance.getState();
}

function sendQualities(playerInstance) {
  setInterval(() => {
    var qualities = playerInstance.getQualityLevels();
    var quality = playerInstance.getCurrentQuality();
    var stateNow = getState(playerInstance);
    // if (stateNow == "playing") {
    socket.emit("quality", qualities, quality);
    // }
  }, 4000);
}

function sendCurrentTime(playerInstance) {
  setInterval(() => {
    var current_time = playerInstance.getPosition();
    socket.emit("currentTime", Math.floor(current_time));
  }, 1000);
}

function stateSend(playerInstance) {
  setInterval(() => {
    socket.emit("state", getState(playerInstance));
  }, 1500);
}

// function mutedSend(playerInstance) {
//   if (playerInstance.getMute() == true) {
//     // socket.emit("events", "mute", 0);
//   }
// }
