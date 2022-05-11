import styles from './styles.module.scss'
import { MdDeleteForever, MdSave } from 'react-icons/all'
import { formatDate } from '../../ultils/formatedDate';
import { useState } from 'react';
import { request } from '../../services/request';
interface Props {
    note: {
        id: string;
        body: string;
        createdAt: string;
        updatedAt: string;
    },
    onDeleteNote: (id: string) => void
    onSetNotes: ([]: any) => void
}
export const NoteItem = ({ note, onDeleteNote, onSetNotes }: Props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [noteBody, setNoteBody] = useState(note.body)

    const handleEdit = () => {
        setIsEdit(true)
    }

    // const random = Math.floor(Math.random() * 4);

    const handleUpdate = async (id: string) => {
        if (noteBody !== note.body) {
            const response = await request.UpdateNote({ id, body: noteBody })
            if (response.id) {
                window.location.href = window.location.href //depois
                onSetNotes((oldNotes: any) => [...oldNotes, response])
            }
        }
        setIsEdit(false)
    }


    return (
        <div className={styles.container}  >
            <textarea
                placeholder='Adicionar nova nota...'
                cols={10}
                rows={8}
                value={noteBody}
                onChange={e => setNoteBody(e.target.value)}
                onClick={handleEdit}
            />
            <footer>
                <small>{formatDate(String(note.updatedAt))}</small>
                {!isEdit ?
                    <MdDeleteForever size="1.3rem" onClick={() => onDeleteNote(note.id)} /> :
                    <MdSave size="1.3rem" onClick={() => handleUpdate(note.id)} />}

            </footer>
        </div>
    );
}