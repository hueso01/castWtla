var socket = io();

var playerContainer = document.querySelector("#aRzklaXf");
socket.on("connect", () => {
  playerContainer.innerHTML = `<h1>CONECTADO AL SERVER, ESPERANDO CONTENIDO...</h1>`;

  socket.on("stream", (url) => {
    var url = url;
    var countplayer = 1;
    var countcheck = 0;
    var playerInstance = jwplayer("aRzklaXf");
    playerInstance.setup({
      file: `${url}`,
      width: "100%",
      height: "100%",
      title: "",
      description: "",
      stretching: "bestfit",
      image: "#",
      mediaid: "player",
      autostart: true,
      cast: {
        appid: "",
        logo: "",
        title: "",
      },
    });

    //QUITAR CONTROLES
    // playerInstance.setControls(false);

    //RECIBIR EVENTOS COMO PLAY, PAUSA, ETC
    socket.on("events", (play, time) => {
      doAction(play, time, playerInstance);
    });

    playerInstance.on("beforePlay", () => {
      //ENVIAR DURACION DEL VIDEO
      sendDuration(playerInstance);
    });

    //CUANDO SE EMPIEZE A REPRODUCIR
    playerInstance.on("play", function (current_time) {
      //ENVIAMOS EL CURRENT TIME CADA 1S
      sendCurrentTime(playerInstance);
      //STATE
      stateSend(playerInstance);
      // playerInstance.setVolume(100);
      // sendMuted(playerInstance);
      if (playerInstance.getMute() == true) {
        playerInstance.setVolume(100);
        if (getState(playerInstance) != "paused") {
          showAviso(
            "Por motivos de seguridad, si primero no hay una interacción con el navegador no reproducirá el contenido..",
            ""
          );
        }
      }
      // sendQualities(playerInstance);
    });

    //OBTENER ESTADO DEL PLAYER
    sendQualities(playerInstance);
  });
});
