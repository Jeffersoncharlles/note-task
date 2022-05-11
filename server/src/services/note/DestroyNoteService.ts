import { prisma } from "../../db/prisma"

interface Props {
    id: string
}

class DestroyNoteService {
    async execute({ id }: Props) {

        if (!id) {
            throw new Error("Invalid params send")
        }

        const noteExists = await prisma.note.findFirst({ where: { id } })

        if (!noteExists) {
            throw new Error("Invalid not Exists")
        }
        const response = await prisma.note.delete({ where: { id } })

        return response
    }
}

export { DestroyNoteService }