const body = document.querySelector("body");
const image = document.querySelector(".image img");
const data = getParam("data");
const buttonSend = document.querySelector(".send-button");
const mediaControls = document.querySelector(".mediaControls");
const progressBar = document.querySelector(".progress-bar-normal");
const btnConfig = document.querySelector("#btn-config");
const mdlConfig = document.querySelector(".menu-config-index");
const btnConfigClose = document.querySelector("#close-menu-index-config");
const iconSend = document.querySelector(".icon-send");
const btnCloseConfigIndex = document.querySelector("#close-config-head");
const panelConfigIndex = document.querySelector(".config-head-send-index");
const btnAudio = document.querySelector("#btn-volume");
// var socket = io();
var number;
//REQUEST GET DESIGN IMAGES
const request = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("WARN", response.status);
  var data = await response.text();
  data = JSON.parse(data);
  return data;
};

// window.addEventListener("load", () => {
const resultOk = request(`https://apgtlkpl.herokuapp.com/?data=${data}`);
resultOk
  .then((data) => {
    body.style.background = `url(${data.background})`;
    image.src = `${data.poster}`;
    buttonSend.dataset.url = `${data.url_media}`;
    image.alt = `${data.title}`;
    document.title += ` | ${data.title}`;
  })
  .catch((error) => {
    console.log("error");
  });

//ENVIAR URL A RECEIVER AL TOCAR EL BUTTON SEND
buttonSend.addEventListener("click", () => {
  const url = buttonSend.dataset.url;
  buttonSend.style = "pointer-events: none;transform: rotateZ(45deg);";
  setTimeout(() => {
    buttonSend.style = "pointer-events: auto;transform: rotateZ(0deg);";
    mediaControls.style = "margin-top: 0px;margin-bottom: 0px;";
  }, 2000);

  sendMediaUrl(`${url}`);
  renew();
});

//OBTENEMOS Y REPRODUCIMOS EL VIDEO
const play = document.querySelector("#play");
play.addEventListener("click", () => {
  play.classList.add("cls");
  pause.classList.remove("cls");
  videoPlay();
});

//OBTENEMOS Y PAUSAMOS EL VIDEO
const pause = document.querySelector("#pause");
pause.addEventListener("click", () => {
  play.classList.remove("cls");
  pause.classList.add("cls");
  videoPause();
});

//EVENTO QUE ENVIA EL VALOR DEL INPUT AL CAMBIARSE
progressBar.addEventListener("change", () => {
  var valor = progressBar.value;
  sendSeekChange(valor);
});

//OBTENER LA DURACION DEL VIDEO
// getDuration();

//OBTENER EL TIEMPO ACTUAL DEL VIDEO
// getCurrentTime();

//CONFIG
btnConfig.addEventListener("click", () => {
  mdlConfig.classList.add("active");
});

btnConfigClose.addEventListener("click", () => {
  mdlConfig.classList.remove("active");
});

var qualityMenu = document.querySelector(".quality-menu");

qualityMenu.addEventListener("click", (e) => {
  const elementSelect = e.target;
  const dataQ = elementSelect.dataset.q;

  elementSelect.classList.toggle("active-quality");
  setQuality(dataQ);
});

iconSend.addEventListener("click", () => {
  panelConfigIndex.classList.add("op-cl");
  // iconSend.classList.add("rotate-loading");
});

btnCloseConfigIndex.addEventListener("click", () => {
  panelConfigIndex.classList.remove("op-cl");
});

btnAudio.addEventListener("click", () => {});
