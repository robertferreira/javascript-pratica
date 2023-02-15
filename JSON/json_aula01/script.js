const objs = [
    {
        "nome": "Robert",
        "idade": 21,
        "esta_trabalhando": true,
        "hobbies": ["Séries","Filmes","Jogos","Estudo","Programação"],
        "detalhes_profissao": {
            "profissao": "Técnico de Informática",
            "empresa": "Caliman's Comércio de Artesanato"
        }
    },
    {
        "nome": "João",
        "idade": 25,
        "esta_trabalhando": false,
        "hobbies": ["Academia", "Futebol"],
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null
        }
    },
]

console.log(objs);

// converter OBJETOS para STRING JSON (componentes do ARRAY viram STRING)
const jsonData = JSON.stringify(objs);

// converter STRING para OBJETO JSON (componentes da STRING viram ARRAY)
const objData = JSON.parse(jsonData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})