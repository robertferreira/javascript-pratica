const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/aprendendo")
  .then(() => {
    console.log("MongoDB Conectado");
  })
  .catch((erro) => {
    console.log("Houve um erro ao se conectar ao MongoDB:" + erro);
  });
