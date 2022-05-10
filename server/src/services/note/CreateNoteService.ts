import slugify from "slugify";
import { prisma } from "../../db/prisma";
interface Props {
    title: string;
    body: string;
    slug?: string;
}

class CreateNoteService {
    async execute({ body, title, slug = slugify(title, { lower: true }) }: Props) {
        if (!title && !body) {
            throw new Error("Invalid params not send")
        }

        const noteExists = await prisma.note.findUnique({ where: { slug } })

        if (noteExists) {
            throw new Error("Invalid note Exists")
        }

        const newNote = await prisma.note.create({
            data: {
                title, slug, body
            }
        })

        return newNote
    }
}

export { CreateNoteService }