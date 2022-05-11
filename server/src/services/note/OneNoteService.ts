import { prisma } from "../../db/prisma";

interface Props {
    id: string;
}

class OneNoteService {
    async execute({ id }: Props) {

        if (!id) {
            throw new Error("Invalid params no send")
        }

        const slugExists = await prisma.note.findFirst({ where: { id } })

        if (!slugExists) {
            throw new Error("Invalid not exists")
        }

        return slugExists
    }
}

export { OneNoteService }