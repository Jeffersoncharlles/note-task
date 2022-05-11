import { prisma } from "../../db/prisma"

interface Props {
    id: string
    body: string
}

class UpdateNoteService {
    async execute({ id, body }: Props) {
        if (!id) {
            throw new Error("Invalid! Params no send")
        }

        const noteExists = await prisma.note.update({
            where: {
                id
            },
            data: {
                body,
                updatedAt: new Date()
            }
        })
        if (!noteExists) {
            throw new Error("Invalid No exists")
        }

        return noteExists
    }
}

export { UpdateNoteService }