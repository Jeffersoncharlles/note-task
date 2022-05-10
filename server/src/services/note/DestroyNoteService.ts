import { prisma } from "../../db/prisma"

interface Props {
    slug: string
}

class DestroyNoteService {
    async execute({ slug }: Props) {

        if (!slug) {
            throw new Error("Invalid params send")
        }

        const slugExists = await prisma.note.findUnique({ where: { slug } })

        if (!slugExists) {
            throw new Error("Invalid not Exists")
        }
        const response = await prisma.note.delete({ where: { slug } })

        return response
    }
}

export { DestroyNoteService }