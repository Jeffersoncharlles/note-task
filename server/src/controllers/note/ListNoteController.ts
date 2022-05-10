import { Request, Response } from "express";
import { ListNoteService } from "../../services/note/ListNoteService";


class ListNoteController {
    async handle(req: Request, res: Response) {
        const listAll = new ListNoteService()
        const response = await listAll.execute()
        return res.json(response)

    }
}

export { ListNoteController }