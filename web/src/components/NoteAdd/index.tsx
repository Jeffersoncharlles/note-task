import { useState } from 'react';
import styles from './styles.module.scss'

interface Props {
    onNewNote: (body: string) => void;
}

export const NoteAdd = ({ onNewNote }: Props) => {
    const [noteBody, setNoteBody] = useState('')
    const characterLimit = 200

    const handleSave = async () => {
        if (noteBody.trim().length > 0) {
            onNewNote(noteBody)
        }
        setNoteBody('')
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteBody(e.target.value)
        }
    }

    return (
        <div className={styles.container}>
            <textarea
                placeholder='Adicionar nova nota...'
                cols={10}
                rows={8}
                value={noteBody}
                onChange={handleChange}
            />
            <footer>
                <small>{characterLimit - noteBody.length} Carácteres</small>
                <button onClick={handleSave}>
                    Save
                </button>
            </footer>
        </div>
    );
}