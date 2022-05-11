import { Request, Response } from "express";
import { UpdateNoteService } from "../../services/note/UpdateNoteService";

class UpdateNoteController {
    async handle(req: Request, res: Response) {
        const update = new UpdateNoteService()
        const { id } = req.params as any
        const { body } = req.body
        const response = await update.execute({ id, body })

        return res.json(response)

    }
}

export { UpdateNoteController }