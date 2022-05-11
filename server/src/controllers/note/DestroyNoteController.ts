import { Request, Response } from "express";
import { DestroyNoteService } from "../../services/note/DestroyNoteService";



class DestroyNoteController {
    async handle(req: Request, res: Response) {
        const destroy = new DestroyNoteService()
        const { id } = req.body
        const response = await destroy.execute({ id })
        return res.json(response)

    }
}

export { DestroyNoteController }