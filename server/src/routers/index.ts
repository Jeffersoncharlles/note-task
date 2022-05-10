import { Router } from "express";
import { CreateNoteController } from "../controllers/note/CreateNoteController";
import { DestroyNoteController } from "../controllers/note/DestroyNoteController";
import { ListNoteController } from "../controllers/note/ListNoteController";
import { OneNoteController } from "../controllers/note/OneNoteController";
import { UpdateNoteController } from "../controllers/note/UpdateNoteController";

const Routers = Router()

const createNoteController = new CreateNoteController()
const oneNoteController = new OneNoteController()
const listNoteController = new ListNoteController()
const updateNoteController = new UpdateNoteController()
const destroyNoteController = new DestroyNoteController()


Routers.get('/', (req, res) => {
    return res.json({ message: "Hello World" })
})


Routers.post('/note', createNoteController.handle)
Routers.get('/note/:slug', oneNoteController.handle)
Routers.get('/note', listNoteController.handle)
Routers.put('/note/:slug', updateNoteController.handle)
Routers.delete('/note', destroyNoteController.handle)



export { Routers }