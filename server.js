const bd = require('./src/data/sqlite_bd')
const Express = require('express')
const cors = require('cors')
//porta 4022
const port = process.env.PORT
const app = Express()
const tattooController = require('./src/controllers/tattoo_controller')

app.use(cors())
app.use(Express.json())

tattooController(app, bd)





app.listen(port, ()=>console.log(`[INFO]Server running in port: ${port}`))