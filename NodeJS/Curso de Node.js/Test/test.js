const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = sequelize.define("postagens", {
  titulo: { type: Sequelize.STRING },
  conteudo: { type: Sequelize.TEXT },
});

//Postagem.sync({ force: true });

/*Postagem.create({
  titulo: "UM TITULO QUALQUER",
  conteudo: "CONTEUDO QUALQUER",
});*/

const Usuario = sequelize.define("usuarios", {
  nome: { type: Sequelize.STRING },
  sobrenome: { type: Sequelize.STRING },
  idade: { type: Sequelize.INTEGER },
  email: { type: Sequelize.STRING },
});

//Usuario.sync({force: true});

Usuario.create({
  nome: "Robert",
  sobrenome: "Ferreira",
  idade: 22,
  email: "robertferreira@gmail.com"
})