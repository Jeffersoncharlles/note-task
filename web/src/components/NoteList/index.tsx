import { NoteAdd } from '../NoteAdd';
import { NoteItem } from '../NoteItem';
import styles from './styles.module.scss'

interface Props {
    notes: {
        id: string;
        body: string;
        createdAt: string;
        updatedAt: string
    }[],
    onNewNote: (body: string) => void
    onDeleteNote: (id: string) => void
}

export const NoteList = ({ notes, onNewNote, onDeleteNote }: Props) => {

    return (
        <div className={styles.container}>
            {notes.map((item, index) => (
                <NoteItem key={item.id} note={item} onDeleteNote={onDeleteNote} />
            ))}
            <NoteAdd onNewNote={onNewNote} />

        </div>
    );
}