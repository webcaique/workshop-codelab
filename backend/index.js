
/**
 * DESAFIO: pequena tela de registrar e seguir
 * Seu objetivo é criar um pequeno servidor que vai receber a requisição de resgistrar
 * Daí vai registrar o usuário e ele vai ter a opção de seguir a Dona Benta e, também, quem está seguindo ela
 */

const express = require("express");

const app = express();

app.use(express.json());

let usuarios = [];

app.listen(8000, function (erro){
    console.log(erro);
})

