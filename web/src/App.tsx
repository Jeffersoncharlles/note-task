import { useEffect, useState } from 'react'
import styles from './app.module.scss'
import { NoteList } from './components/NoteList'
import { request } from './services/request'

interface INotes {
  id: string
  body: string
  createdAt: string;
  updatedAt: string;
}

function App() {
  const [notes, setNotes] = useState<INotes[]>([])
  const [errors, setErrors] = useState('')


  const deleteNote = async (id: string) => {
    const response = await request.DestroyNote({ id })
    if (response.error) {
      setErrors(response.error)
    }
  }

  useEffect(() => {
    (async () => {
      const response = await request.ListAll()
      if (response) {
        setNotes(response)
      }
    })()
  }, [deleteNote])

  const newNote = async (body: string) => {
    const response = await request.CreateNote({ body })
    if (response.id) {
      const newNote = response
      const newNotes = [...notes, newNote]
      setNotes(newNotes)
    }
  }





  return (
    <div className={styles.container}>
      <NoteList notes={notes} onNewNote={newNote} onDeleteNote={deleteNote} />
    </div>
  )
}

export default App
