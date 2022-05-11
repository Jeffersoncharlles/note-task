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
}
export const NoteItem = ({ note, onDeleteNote }: Props) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        setIsEdit(true)
    }



    return (
        <div className={styles.container}>
            <textarea
                placeholder='Adicionar nova nota...'
                cols={10}
                rows={8}
                value={note.body}
                onChange={() => { }}
                onClick={handleEdit}
            />
            <footer>
                <small>{formatDate(String(note.updatedAt))}</small>
                {!isEdit ? <MdDeleteForever size="1.3rem" onClick={() => onDeleteNote(note.id)} /> : <MdSave size="1.3rem" />}

            </footer>
        </div>
    );
}