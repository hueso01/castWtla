var number,
  _0x4490 = [
    "body",
    "querySelector",
    ".image img",
    "data",
    ".send-button",
    ".mediaControls",
    ".progress-bar-normal",
    "#btn-config",
    ".menu-config-index",
    "#close-menu-index-config",
    ".icon-send",
    "#close-config-head",
    ".config-head-send-index",
    "#btn-volume",
    "ok",
    "WARN",
    "status",
    "text",
    "parse",
    "https://apgtlkpl.herokuapp.com/?data=",
    "",
    "error",
    "log",
    "catch",
    "background",
    "style",
    "url(",
    ")",
    "src",
    "poster",
    "url",
    "dataset",
    "url_media",
    "alt",
    "title",
    " | ",
    "then",
    "click",
    "pointer-events: none;transform: rotateZ(45deg);",
    "pointer-events: auto;transform: rotateZ(0deg);",
    "margin-top: 0px;margin-bottom: 0px;",
    "addEventListener",
    "#play",
    "cls",
    "add",
    "classList",
    "remove",
    "#pause",
    "change",
    "value",
    "active",
    ".quality-menu",
    "target",
    "q",
    "active-quality",
    "toggle",
    "op-cl",
  ];
const body = document[_0x4490[1]](_0x4490[0]),
  image = document[_0x4490[1]](_0x4490[2]),
  data = getParam(_0x4490[3]),
  buttonSend = document[_0x4490[1]](_0x4490[4]),
  mediaControls = document[_0x4490[1]](_0x4490[5]),
  progressBar = document[_0x4490[1]](_0x4490[6]),
  btnConfig = document[_0x4490[1]](_0x4490[7]),
  mdlConfig = document[_0x4490[1]](_0x4490[8]),
  btnConfigClose = document[_0x4490[1]](_0x4490[9]),
  iconSend = document[_0x4490[1]](_0x4490[10]),
  btnCloseConfigIndex = document[_0x4490[1]](_0x4490[11]),
  panelConfigIndex = document[_0x4490[1]](_0x4490[12]),
  btnAudio = document[_0x4490[1]](_0x4490[13]),
  request = async (b) => {
    let a = await fetch(b);
    if (!a[_0x4490[14]]) throw new Error(_0x4490[15], a[_0x4490[16]]);
    var c = await a[_0x4490[17]]();
    return JSON[_0x4490[18]](c);
  },
  resultOk = request(`${_0x4490[19]}${data}${_0x4490[20]}`);
resultOk[_0x4490[36]]((a) => {
  (body[_0x4490[25]][_0x4490[24]] = `${_0x4490[26]}${a[_0x4490[24]]}${
    _0x4490[27]
  }`),
    (image[_0x4490[28]] = `${_0x4490[20]}${a[_0x4490[29]]}${_0x4490[20]}`),
    (buttonSend[_0x4490[31]][_0x4490[30]] = `${_0x4490[20]}${a[_0x4490[32]]}${
      _0x4490[20]
    }`),
    (image[_0x4490[33]] = `${_0x4490[20]}${a[_0x4490[34]]}${_0x4490[20]}`),
    (document[_0x4490[34]] += `${_0x4490[35]}${a[_0x4490[34]]}${_0x4490[20]}`);
})[_0x4490[23]]((a) => {
  console[_0x4490[22]](_0x4490[21]);
}),
  buttonSend[_0x4490[41]](_0x4490[37], () => {
    let a = buttonSend[_0x4490[31]][_0x4490[30]];
    (buttonSend[_0x4490[25]] = _0x4490[38]),
      setTimeout(() => {
        (buttonSend[_0x4490[25]] = _0x4490[39]),
          (mediaControls[_0x4490[25]] = _0x4490[40]);
      }, 2e3),
      sendMediaUrl(`${_0x4490[20]}${a}${_0x4490[20]}`),
      renew();
  });
const play = document[_0x4490[1]](_0x4490[42]);
play[_0x4490[41]](_0x4490[37], () => {
  play[_0x4490[45]][_0x4490[44]](_0x4490[43]),
    pause[_0x4490[45]][_0x4490[46]](_0x4490[43]),
    videoPlay();
});
const pause = document[_0x4490[1]](_0x4490[47]);
pause[_0x4490[41]](_0x4490[37], () => {
  play[_0x4490[45]][_0x4490[46]](_0x4490[43]),
    pause[_0x4490[45]][_0x4490[44]](_0x4490[43]),
    videoPause();
}),
  progressBar[_0x4490[41]](_0x4490[48], () => {
    var a;
    sendSeekChange(progressBar[_0x4490[49]]);
  }),
  btnConfig[_0x4490[41]](_0x4490[37], () => {
    mdlConfig[_0x4490[45]][_0x4490[44]](_0x4490[50]);
  }),
  btnConfigClose[_0x4490[41]](_0x4490[37], () => {
    mdlConfig[_0x4490[45]][_0x4490[46]](_0x4490[50]);
  });
var qualityMenu = document[_0x4490[1]](_0x4490[51]);
qualityMenu[_0x4490[41]](_0x4490[37], (b) => {
  let a = b[_0x4490[52]],
    c = a[_0x4490[31]][_0x4490[53]];
  a[_0x4490[45]][_0x4490[55]](_0x4490[54]), setQuality(c);
}),
  iconSend[_0x4490[41]](_0x4490[37], () => {
    panelConfigIndex[_0x4490[45]][_0x4490[44]](_0x4490[56]);
  }),
  btnCloseConfigIndex[_0x4490[41]](_0x4490[37], () => {
    panelConfigIndex[_0x4490[45]][_0x4490[46]](_0x4490[56]);
  }),
  btnAudio[_0x4490[41]](_0x4490[37], () => {});
