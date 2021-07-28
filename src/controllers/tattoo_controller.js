const TattooDao = require('../dao/tattoo_dao')

module.exports = (app, bd) =>{
    const daoTattoo = new TattooDao(bd)

    app.post('/tattoo/studio/addStudio', async (res, resp)=>{
        try{
            const body = res.body
            const params = [body.UNIDADE, body.RUA, body.NUMERO, body.BAIRRO, body.CIDADE, body.ESTADO, body.TELEFONE, body.FUNCIONARIOS, body.RECEITA, body.DESPESAS]
            
            const respostaAddStudio = await daoTattoo.AddStudio(params)
            resp.send(respostaAddStudio)
        }catch(error){
            resp.send(error)
        }
    
    })

    app.get('/tattoo/studio', async(req, resp)=>{
        try{
            const respostaReadStudio = await daoTattoo.ReadStudio()
            resp.send(respostaReadStudio)
        }catch(error){
            resp.send(error)
        }
    })

    app.get('/tattoo/studio/:ID', async(req, resp)=>{
        try{
            const id = req.params.ID

            const respostaSearchSpecific = await daoTattoo.SearchSpecific(id)
            resp.send(respostaSearchSpecific)
        }catch(error){
            resp.send(error)
        }
    })

}