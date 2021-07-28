//Requisições
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db')

//Criando tabela
const tattoo_schema = `
CREATE TABLE IF NOT EXISTS "FILIAIS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "UNIDADE" varchar(50),
    "RUA" varchar(100),
    "NUMERO" varchar(10),
    "BAIRRO" varchar(50),
    "CIDADE" varchar(50),
    "ESTADO" varchar(50),
    "TELEFONE" varchar(50),
    "FUNCIONARIOS" varchar(500),
    "RECEITA" varchar(100),
    "DESPESAS" varchar(100)
)`

function criaTableTattoo() {
    db.run(tattoo_schema, (error)=>{
        if(error) console.log("Erro ao criar tabela tattoo", error)
    })
}

db.serialize(()=>{
    criaTableTattoo()
})


