import { Request, Response } from "express";
import { OneNoteService } from "../../services/note/OneNoteService";



class OneNoteController {
    async handle(req: Request, res: Response) {
        const oneNote = new OneNoteService()
        const { slug } = req.body
        const response = await oneNote.execute({ slug })
        return res.json(response)
    }

}

export { OneNoteController }