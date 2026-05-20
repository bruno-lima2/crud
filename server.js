const express = require("express");
const app = express();
const router = require("./routes/users");
const errorHandler = require("./middlewares/errorHandler");
app.use(express.json());
app.use("/usuarios", router);
app.use(errorHandler);
app.get("/", (request, response) => {
  response.send("Servidor funcionando");
});
app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});
