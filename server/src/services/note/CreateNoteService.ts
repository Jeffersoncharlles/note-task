import { prisma } from "../../db/prisma";
interface Props {
    body: string;
    id?: string;
}

class CreateNoteService {
    async execute({ body, id }: Props) {
        if (!body) {
            throw new Error("Invalid params not send")
        }

        if (id) {
            const noteExists = await prisma.note.findMany({ where: { id } })

            if (noteExists) {
                throw new Error("Invalid note Exists")
            }
        }

        const newNote = await prisma.note.create({
            data: {
                body
            }
        })

        return newNote
    }
}

export { CreateNoteService }