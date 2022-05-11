import { Request, Response } from "express";
import { OneNoteService } from "../../services/note/OneNoteService";



class OneNoteController {
    async handle(req: Request, res: Response) {
        const oneNote = new OneNoteService()
        const { id } = req.body
        const response = await oneNote.execute({ id })
        return res.json(response)
    }

}

export { OneNoteController }