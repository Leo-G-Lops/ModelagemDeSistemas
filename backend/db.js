const mysql = require("mysql2");
const db = mysql.createConnection({
    host:"localhost", 
    user:"root",
    password: "",
    database:"graos"
});

db.connect(function(erro){
    if(erro){
        console.log("Erro ao conectar")
    } else{
        console.log("Banco conectado")
    }
});

module.exports = db;