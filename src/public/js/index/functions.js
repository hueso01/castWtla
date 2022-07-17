var _0x1bc6 = [
    "\\]",
    "replace",
    "\\[",
    "[\\?&]",
    "=([^&#]*)",
    "search",
    "exec",
    "",
    " ",
    "stream",
    "emit",
    "events",
    "played",
    "paused",
    "seek",
    "durationTime",
    "innerText",
    ".durationTime",
    "querySelector",
    "on",
    "currentTime",
    "value",
    "setAttribute",
    ".progress-bar-normal",
    ".currentTimeSpan",
    "floor",
    "0",
    ":",
    "cls",
    "contains",
    "classList",
    "#pause",
    "remove",
    "add",
    "#play",
    "quality",
    "innerHTML",
    ".quality-menu",
    "label",
    "active-quality",
    '<span class="quality-op ',
    '" data-q="',
    '">',
    "</span>",
    "forEach",
    "setQuality",
    "state",
  ],
  socket = io();
const getParam = (a) => {
    a = a[_0x1bc6[1]](/[\[]/, _0x1bc6[2])[_0x1bc6[1]](/[\]]/, _0x1bc6[0]);
    var c,
      b = new RegExp(_0x1bc6[3] + a + _0x1bc6[4])[_0x1bc6[6]](
        location[_0x1bc6[5]]
      );
    return null === b
      ? _0x1bc6[7]
      : decodeURIComponent(b[1][_0x1bc6[1]](/\+/g, _0x1bc6[8]));
  },
  sendMediaUrl = (a) => {
    socket[_0x1bc6[10]](_0x1bc6[9], a);
  };
function videoPlay() {
  socket[_0x1bc6[10]](_0x1bc6[11], _0x1bc6[12], _0x1bc6[7]);
}
function videoPause() {
  socket[_0x1bc6[10]](_0x1bc6[11], _0x1bc6[13], _0x1bc6[7]);
}
const sendSeekChange = (a) => {
  socket[_0x1bc6[10]](_0x1bc6[11], _0x1bc6[14], a);
};
function calculateTime(d) {
  var a = Math[_0x1bc6[25]](d / 3600);
  a = a < 10 ? _0x1bc6[26] + a : a;
  var b = Math[_0x1bc6[25]]((d / 60) % 60);
  b = b < 10 ? _0x1bc6[26] + b : b;
  var c = d % 60;
  return (
    (c = c < 10 ? _0x1bc6[26] + c : c),
    `${_0x1bc6[7]}${a}${_0x1bc6[27]}${b}${_0x1bc6[27]}${c}${_0x1bc6[7]}`
  );
}
function renew() {
  document[_0x1bc6[18]](_0x1bc6[31])[_0x1bc6[30]][_0x1bc6[29]](_0x1bc6[28]) &&
    (document[_0x1bc6[18]](_0x1bc6[31])[_0x1bc6[30]][_0x1bc6[32]](_0x1bc6[28]),
    document[_0x1bc6[18]](_0x1bc6[34])[_0x1bc6[30]][_0x1bc6[33]](_0x1bc6[28])),
    setTimeout(() => {
      document[_0x1bc6[18]](_0x1bc6[23])[_0x1bc6[21]] = 0;
    }, 2e3);
}
socket[_0x1bc6[19]](_0x1bc6[15], (a) => {
  document[_0x1bc6[18]](_0x1bc6[17])[_0x1bc6[16]] = calculateTime(a);
}),
  socket[_0x1bc6[19]](_0x1bc6[20], (a) => {
    document[_0x1bc6[18]](_0x1bc6[23])[_0x1bc6[22]](_0x1bc6[21], a),
      (document[_0x1bc6[18]](_0x1bc6[24])[_0x1bc6[16]] = calculateTime(a));
  });
var array_qualities = [];
socket[_0x1bc6[19]](_0x1bc6[35], (a, b) => {
  var c = -1,
    d = b;
  (document[_0x1bc6[18]](_0x1bc6[37])[_0x1bc6[36]] = `${_0x1bc6[7]}`),
    a[_0x1bc6[44]]((a) => {
      c++;
      var b = a[_0x1bc6[38]],
        e = c == d ? _0x1bc6[39] : _0x1bc6[7];
      document[_0x1bc6[18]](_0x1bc6[37])[
        _0x1bc6[36]
      ] += `${_0x1bc6[40]}${e}${_0x1bc6[41]}${c}${_0x1bc6[42]}${b}${_0x1bc6[43]}`;
    });
});
const setQuality = (a) => {
  socket[_0x1bc6[10]](_0x1bc6[11], _0x1bc6[45], a);
};
socket[_0x1bc6[19]](_0x1bc6[46], (a) => {
  a != _0x1bc6[13] ||
    document[_0x1bc6[18]](_0x1bc6[31])[_0x1bc6[30]][_0x1bc6[29]](_0x1bc6[28]) ||
    (document[_0x1bc6[18]](_0x1bc6[31])[_0x1bc6[30]][_0x1bc6[33]](_0x1bc6[28]),
    document[_0x1bc6[18]](_0x1bc6[34])[_0x1bc6[30]][_0x1bc6[32]](_0x1bc6[28]));
});
