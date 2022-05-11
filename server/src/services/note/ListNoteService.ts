import { prisma } from "../../db/prisma"


class ListNoteService {
    async execute() {
        const notes = await prisma.note.findMany({ orderBy: { id: "desc" } })

        return notes
    }
}

export { ListNoteService }