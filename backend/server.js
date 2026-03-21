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