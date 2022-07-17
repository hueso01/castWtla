var _0x9c12 = [
    "#aRzklaXf",
    "querySelector",
    "connect",
    "innerHTML",
    "<h1>CONECTADO AL SERVER, ESPERANDO CONTENIDO...</h1>",
    "stream",
    "aRzklaXf",
    "",
    "100%",
    "Watch Ala",
    "bestfit",
    "#",
    "player",
    "Watch ALa",
    "Viendo transmisi\xf3n",
    "setup",
    "events",
    "on",
    "beforePlay",
    "play",
    "getMute",
    "setVolume",
    "paused",
    "Por motivos de seguridad, si primero no hay una interacci\xf3n con el navegador no reproducir\xe1 el contenido..",
  ],
  socket = io(),
  playerContainer = document[_0x9c12[1]](_0x9c12[0]);
socket[_0x9c12[17]](_0x9c12[2], () => {
  (playerContainer[_0x9c12[3]] = `${_0x9c12[4]}`),
    socket[_0x9c12[17]](_0x9c12[5], (b) => {
      var b = b,
        c = 1,
        d = 0,
        a = jwplayer(_0x9c12[6]);
      a[_0x9c12[15]]({
        file: `${_0x9c12[7]}${b}${_0x9c12[7]}`,
        width: _0x9c12[8],
        height: _0x9c12[8],
        title: _0x9c12[9],
        description: _0x9c12[7],
        stretching: _0x9c12[10],
        image: _0x9c12[11],
        mediaid: _0x9c12[12],
        autostart: !0,
        cast: { appid: _0x9c12[12], logo: _0x9c12[13], title: _0x9c12[14] },
      }),
        socket[_0x9c12[17]](_0x9c12[16], (b, c) => {
          doAction(b, c, a);
        }),
        a[_0x9c12[17]](_0x9c12[18], () => {
          sendDuration(a);
        }),
        a[_0x9c12[17]](_0x9c12[19], function (b) {
          sendCurrentTime(a),
            stateSend(a),
            !0 == a[_0x9c12[20]]() &&
              (a[_0x9c12[21]](100),
              getState(a) != _0x9c12[22] && showAviso(_0x9c12[23], _0x9c12[7]));
        }),
        sendQualities(a);
    });
});
