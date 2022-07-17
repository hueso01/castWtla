const http = require("./app.js");
const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log("Server running");
});
