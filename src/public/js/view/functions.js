var _0x7849 = [
  "innerText",
  ".messages",
  "querySelector",
  " ",
  "showMessage",
  "add",
  "classList",
  "remove",
  "",
  "played",
  "play",
  "paused",
  "pause",
  "fullscreenAction",
  "click",
  ".jw-icon-fullscreen",
  "seek",
  "setQuality",
  "setCurrentQuality",
  "Cambiando calidad ",
  "getDuration",
  "durationTime",
  "floor",
  "emit",
  "getQualityLevels",
  "getCurrentQuality",
  "quality",
  "getState",
  "getPosition",
  "currentTime",
  "state",
];
function showAviso(a, b) {
  setTimeout(() => {
    (document[_0x7849[2]](_0x7849[1])[_0x7849[0]] = a + _0x7849[3] + b),
      document[_0x7849[2]](_0x7849[1])[_0x7849[6]][_0x7849[5]](_0x7849[4]);
  }, 1e3),
    setTimeout(() => {
      document[_0x7849[2]](_0x7849[1])[_0x7849[6]][_0x7849[7]](_0x7849[4]),
        (document[_0x7849[2]](_0x7849[1])[_0x7849[0]] = _0x7849[8]);
    }, 6e3);
}
function doAction(a, c, b) {
  a == _0x7849[9] && b[_0x7849[10]](),
    a == _0x7849[11] && b[_0x7849[12]](),
    a == _0x7849[13] && document[_0x7849[2]](_0x7849[15])[_0x7849[14]](),
    a == _0x7849[16] && b[_0x7849[16]](c),
    a == _0x7849[17] && (b[_0x7849[18]](c), showAviso(_0x7849[19], _0x7849[8]));
}
function sendDuration(a) {
  setTimeout(function () {
    var b = a[_0x7849[20]]();
    socket[_0x7849[23]](_0x7849[21], Math[_0x7849[22]](b));
  }, 3e3);
}
function sendQualities(a) {
  var b = a[_0x7849[24]](),
    c = a[_0x7849[25]]();
  socket[_0x7849[23]](_0x7849[26], b, c);
}
function getState(a) {
  return a[_0x7849[27]]();
}
function sendQualities(a) {
  setInterval(() => {
    var b = a[_0x7849[24]](),
      c = a[_0x7849[25]]();
    getState(a), socket[_0x7849[23]](_0x7849[26], b, c);
  }, 4e3);
}
function sendCurrentTime(a) {
  setInterval(() => {
    var b = a[_0x7849[28]]();
    socket[_0x7849[23]](_0x7849[29], Math[_0x7849[22]](b));
  }, 1e3);
}
function stateSend(a) {
  setInterval(() => {
    socket[_0x7849[23]](_0x7849[30], getState(a));
  }, 1500);
}
