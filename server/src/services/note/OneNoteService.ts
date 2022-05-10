import { prisma } from "../../db/prisma";

interface Props {
    slug: string;
}

class OneNoteService {
    async execute({ slug }: Props) {

        if (!slug) {
            throw new Error("Invalid params no send")
        }

        const slugExists = await prisma.note.findUnique({ where: { slug } })

        if (!slugExists) {
            throw new Error("Invalid not exists")
        }

        return slugExists
    }
}

export { OneNoteService }