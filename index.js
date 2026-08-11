const express = require("express");

const app = express();

let usuarios = [];

app.get("/informacao", function (req, res){
    console.log("Usuários");
    return res.send(usuarios);
});

app.post("/adicionar", function (req, res){
    console.log("Criando um usuário");
    usuarios.push(req.body.nome)
    return res.send("Usuário criado!");
});

app.patch("/atualizar/:id", function (req, res){
    console.log("Atualizando o usuário");
    let idx = req.params.id;
    let nome = req.body.nome;
    usuarios[idx] = nome;
    return res.send("Usuário atualizado!");
});

app.delete("/deletar", function (req, res){
    console.log("Apagando o usuário");
    let idx = req.query.id;
    for(let i = idx; i < usuarios.length-1; i++){
        usuarios[i] = usuarios[i+1];
    }
    usuarios.pop();
});

app.listen(8000, function (erro){
    console.log(erro);
})

