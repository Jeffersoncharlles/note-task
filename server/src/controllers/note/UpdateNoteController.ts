import { Request, Response } from "express";
import { UpdateNoteService } from "../../services/note/UpdateNoteService";

class UpdateNoteController {
    async handle(req: Request, res: Response) {
        const update = new UpdateNoteService()
        const { slug } = req.query as any
        const { body, id, title } = req.body
        const response = await update.execute({ body, id, slug, title })

        return res.json(response)

    }
}

export { UpdateNoteController }