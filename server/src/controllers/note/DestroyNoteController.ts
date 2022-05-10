import { Request, Response } from "express";
import { DestroyNoteService } from "../../services/note/DestroyNoteService";



class DestroyNoteController {
    async handle(req: Request, res: Response) {
        const destroy = new DestroyNoteService()
        const { slug } = req.body
        const response = await destroy.execute({ slug })
        return res.json(response)

    }
}

export { DestroyNoteController }