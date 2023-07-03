const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Seja bem-vindo ao meu app!");
});

app.get("/ola/:cargo/:nome", (req, res) => {
  res.send(req.params);
});

app.listen(8081, () => {
  console.log("Servidor rodando!");
});
