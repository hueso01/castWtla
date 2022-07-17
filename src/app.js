const express = require("express");
const { url } = require("inspector");
const app = express();
const http = require("http").Server(app);

const io = require("socket.io")(http);

//ROUTES
app.use(require("./routes/littlezoom.routes"));

//DONDE VAMOS A CARGAR LOS HTML CON LO QUE VAMOS A TRABAJAR

app.use(express.static(__dirname + "/public"));

//SOCKET.IO
io.on("connection", (socket) => {
  // socket.on("auth", (name, ip, token) => {
  //   socket.broadcast.emit("auth", name, ip, token);
  //   // io.broadcast("stream", image);
  // });

  socket.on("stream", (url) => {
    socket.broadcast.emit("stream", url);
  });
  socket.on("state", (state) => {
    socket.broadcast.emit("state", state);
  });

  socket.on("events", (play, time) => {
    socket.broadcast.emit("events", play, time);
  });

  //PARA EMITIR EL CURRENT TIME DEL VIDEO DESDE VISUALIZAR
  socket.on("currentTime", (currentTime) => {
    socket.broadcast.emit("currentTime", currentTime);
  });

  //PARA EMITIR LA DURACION ENTERA DEL VIDEO DESDE VISUALIZAR
  socket.on("durationTime", (durationTime) => {
    socket.broadcast.emit("durationTime", durationTime);
  });

  //PARA EMITIR LA CALIDADES DEL VIDEO DESDE VISUALIZAR
  socket.on("quality", (Allqualities, quality) => {
    socket.broadcast.emit("quality", Allqualities, quality);
  });
});

module.exports = http;
