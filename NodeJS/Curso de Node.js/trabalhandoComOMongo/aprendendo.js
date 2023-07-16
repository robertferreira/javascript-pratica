const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/bancoTeste")
  .then(() => {
    console.log("MongoDB Conectado");
  })
  .catch((erro) => {
    console.log("Houve um erro ao se conectar ao MongoDB:" + erro);
  });
