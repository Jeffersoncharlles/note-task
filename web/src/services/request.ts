import { api } from "./api"


export const request = {
    CreateNote: async ({ body }: any) => {
        const { data } = await api.post('note', { body })

        if (data) {
            return data
        }

    },
    ListAll: async () => {
        const { data } = await api.get('note')
        if (data) {
            return data
        }
    },
    OneNote: async (slug: string) => {

    },
    UpdateNote: async ({ id, body }: any) => {
        const { data } = await api.put(`/note/${id}`, { body })

        if (data.id) {
            return data
        }
    },
    DestroyNote: async ({ id }: any) => {
        const { data } = await api.delete('/note', {
            data: {
                id
            }
        })
        if (data.id) {
            return data
        }
    }
}