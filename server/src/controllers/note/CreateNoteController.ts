import { Request, Response } from "express";
import { CreateNoteService } from "../../services/note/CreateNoteService";


class CreateNoteController {
    async handle(req: Request, res: Response) {
        const create = new CreateNoteService()
        const { title, body } = req.body
        const response = await create.execute({ title, body })
        return res.status(201).json(response)
    }
}
export { CreateNoteController }