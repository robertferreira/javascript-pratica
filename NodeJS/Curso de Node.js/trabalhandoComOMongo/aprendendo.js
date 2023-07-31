const mongoose = require("mongoose");

// Configurando o moongose
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://127.0.0.1:27017/aprendendo")
  .then(() => console.log("Funcionou!"))
  .catch((error) => console.log("Falhou! Erro:", error));
