import { Router } from "express";


const Routers = Router()

Routers.get('/', (req, res) => {
    return res.json({ message: "Hello World" })
})


Routers.post('/create',)



export { Routers }