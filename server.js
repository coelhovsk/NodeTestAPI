import express from 'express'
// server.js
import { router as dataRoutes } from './routes/router.js';



const app = express()

app.use(express.json())

app.use('/', dataRoutes)

app.listen(3000, ()=>{
    console.log("Server rodando na porta 3000 em: http://localhost:3000")
})