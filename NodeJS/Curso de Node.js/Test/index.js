const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao meu app!");
});

app.get("/ola", (req, res) => {
  res.send("Ola");
});

app.listen(8081, () => {
  console.log("Servidor rodando na url http://localhost:8081");
});
