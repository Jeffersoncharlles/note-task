
interface Props {
    slug: string
    id: string
    title: String
    body: string
}

class UpdateNoteService {
    async execute({ body, id, slug, title }: Props) {

    }
}

export { UpdateNoteService }