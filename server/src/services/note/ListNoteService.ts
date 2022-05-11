import { prisma } from "../../db/prisma"


class ListNoteService {
    async execute() {
        const notes = await prisma.note.findMany()

        return notes
    }
}

export { ListNoteService }