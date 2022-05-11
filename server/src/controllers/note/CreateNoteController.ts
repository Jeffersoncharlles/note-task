import { Request, Response } from "express";
import { CreateNoteService } from "../../services/note/CreateNoteService";


class CreateNoteController {
    async handle(req: Request, res: Response) {
        const create = new CreateNoteService()
        const { body, id } = req.body
        const response = await create.execute({ body, id })
        return res.status(201).json(response)
    }
}
export { CreateNoteController }