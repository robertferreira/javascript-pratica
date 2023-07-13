const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

// Config
// Template Engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Rotas
app.get("/cad", (req, res) => {
  res.render("formulario");
});

app.post("/add", (req, res) => {
  let titulo = req.body.titulo;
  let conteudo = req.body.conteudo;
  res.send(`Texto: ${titulo} Conteúdo: ${conteudo}`);
});

app.listen(8081, () => {
  console.log("Servidor rodando!");
});
