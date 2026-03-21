const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/produtos", function(req,res){
    db.query("SELECT * FROM produto", function (erro,resultado){
        res.json(resultado)
    });
});

app.post("/produto",function(req,res){
    const nome = req.body.nome;
    const tipo = req.body.tipo;

    db.query("INSERT INTO produto(nome,tipo) VALUES (?,?", [nome,tipo], function(erro,resultado){
        res.json(resultado);
    });
});

app.put("/produto/:id", function(req,res){
    const id = req.params.id;
    const {nome,tipo} = req.body;

    db.query("UPDATE produto SET nome=? WHERE id=?", [nome, tipo,id], function(erro,resultado){
        res.json(resultado)
    });
});

app.delete("/produto/:id", function(req,res){
    const id = req.params.id;
    
    db.query("DELETE FROM produto WHERE id=?", [id], function(erro,resultado){
        res.json(resultado)
    });
});

app.get("/estoque", function(req,res){
    db.query("SELECT * FROM estoque", function(erro,resultado){
        res.json(resultado)
    });
});

app.post("/estoque",function(req,res){
    const produto_id = req.body.produto_id;
    const quantidade = req.body.quantidade;

    db.query("INSERT INTO estoque(produto_id,quantidade) VALUES (?,?", [produto_id,quantidade], function(erro,resultado){
        res.json(resultado);
    });
});

app. listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});
