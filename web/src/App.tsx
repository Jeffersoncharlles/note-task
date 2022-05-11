import { useEffect, useState } from 'react'
import styles from './app.module.scss'
import { Header } from './components/Header'
import { NoteList } from './components/NoteList'
import { Search } from './components/Search'
import { request } from './services/request'

interface INotes {
  id: string
  body: string
  createdAt: string;
  updatedAt: string;
}

function App() {
  const [notes, setNotes] = useState<INotes[]>([])
  const [search, setSearch] = useState('')
  const [errors, setErrors] = useState('')


  const deleteNote = async (id: string) => {
    const response = await request.DestroyNote({ id })
    if (response.id) {
      const newNotes = notes.filter((note) => note.id !== id)
      setNotes(newNotes)
    }
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
  }, [])

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
      <Header />
      <Search value={search} setSearch={setSearch} />
      <NoteList
        notes={notes.filter((note) => note.body.toLowerCase().includes(search))}
        onNewNote={newNote}
        onDeleteNote={deleteNote}
        onSetNotes={setNotes}
      />
    </div>
  )
}

export default App
