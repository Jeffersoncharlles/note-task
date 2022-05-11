
interface Props {
    id: string
    title: String
    body: string
}

class UpdateNoteService {
    async execute({ body, id, title }: Props) {

    }
}

export { UpdateNoteService }