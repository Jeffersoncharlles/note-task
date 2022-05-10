interface Props {
    title: string;
    body: string;
}

class CreateNoteService {
    async execute({ body, title }: Props) {
        if (!title && !body) {
            throw new Error("Invalid params not send")
        }


    }
}

export { CreateNoteService }