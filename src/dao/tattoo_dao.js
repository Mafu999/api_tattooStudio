module.exports = class TattooDao{
    constructor(bd){
        this.bd = bd
    }

    AddStudio(params){
        return new Promise((resolve, reject)=>{
            const query = 'INSERT INTO FILIAIS (UNIDADE, RUA, NUMERO, BAIRRO, CIDADE, ESTADO, TELEFONE, FUNCIONARIOS, RECEITA, DESPESAS) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            const parametros = [params[0], params[1], params[2], params[3], params[4], params[5], params[6], params[7], params[8], params[9]]
            this.bd.run(query, parametros, (error, response)=>{
                if(error) reject(`Erro ao adicionar Filial. ${error}`)
                else resolve('Filial adicionada com sucesso')
            })
        })
    }

    ReadStudio(){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM FILIAIS'
            this.bd.all(query, (error, response)=>{
                if(error) reject(`Erro ao consultar banco de dados. ${error}`)
                else resolve(response)
            })
        })
    }

    SearchSpecific(id){
        return new Promise((resolve, reject)=>{
            const query = 'SELECT * FROM FILIAIS WHERE ID = ?'
            this.bd.all(query, id, (error, response)=>{
                if(error) reject(`Erro ao encontrar o ID ${id}. ${error}`)
                else resolve(response)
            })
        })
    }
}