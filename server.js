const express = require("express");
const app = express();
app.get("/", (request, response) => {
  request.send("Servidor funcionando");
});
app.listen(3000, (request, response) => {
  console.log("Servidor na porta 3000");
});
app.use(express.json());
const router = require("./routes/users");
app.use("/usuarios", router);
