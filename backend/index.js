
/**
 * RESOLUÇÃO DO EXERCÍCIO 
 * Aqui vamos ter uma lista que vai ter os usuários com um id e um nome
 * {id:"", nome:""}
 * Vamos ter as 4 operações básicas do CRUD
 */

const express = require("express");

const app = express();

app.use(express.json());

let usuarios = [];

app.get("/toda-informacao", function (req, res){
    
    return res.status(200).send(usuarios);
});

app.post("/resgistar-usuario", function (req, res){
    console.log("Criando um usuário");
    if(req.body.nome.length <= 0) return res.status(400).send("USUÁRIO VAZIO");

    usuarios.push({
        id: crypto.randomUUID(),
        nome:req.body.nome
    });
    return res.status(200).send("Usuário criado!");
});

app.patch("/atualizar-usuario/:id", function (req, res){
    /**
     * ATUALIZA O USUÁRIO DE ACORDO COM O ID
     */
    console.log("Atualizando o usuário");
    let idx = req.params.id;
    let nome = req.body.nome;
    let user = usuarios.find(item => item.id === idx);

    if(user === undefined) return res.status(404).send("USUÁRIO NÃO ENCONTRADO!");
    user.nome = nome;

    return res.status(200).send("Usuário atualizado!");
});

app.delete("/deletar/:id", function (req, res){
    console.log("Apagando o usuário");
    if(!req.params.id) return res.status(400).send("ID VAZIO!");

    usuarios = usuarios.filter(item => item.id != req.params.id);
    
    return res.status(200).send("DELETADO!");
});

app.listen(8000, function (erro){
    console.log(erro);
})

