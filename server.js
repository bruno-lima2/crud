const express = require("express");
const app = express();
const router = require("./routes/users");
app.use(express.json());
app.use("/usuarios", router);
app.get("/", (request, response) => {
  response.send("Servidor funcionando");
});
app.listen(3000, (request, response) => {
  console.log("Servidor na porta 3000");
});
