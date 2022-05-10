import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { Routers } from './routers'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(Routers)

app.listen(process.env.PORT || 3333, () => console.log(`server at: http://localhost:${process.env.PORT || 3333}`))