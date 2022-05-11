import { Request, Response } from "express";
import { UpdateNoteService } from "../../services/note/UpdateNoteService";

class UpdateNoteController {
    async handle(req: Request, res: Response) {
        const update = new UpdateNoteService()
        const { id } = req.query as any
        const { body, title } = req.body
        const response = await update.execute({ body, id, title })

        return res.json(response)

    }
}

export { UpdateNoteController }