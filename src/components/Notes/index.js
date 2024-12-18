// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  BgCont,
  MainCont,
  Title,
  TitleInput,
  NotesInput,
  BtnAdd,
  OutputCont,
  OutputCont1,
  Imagee,
  OutputTitle,
  OutputDesc,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [noteList, setNoteList] = useState([])
  const onClickAdd = event => {
    // console.log('added')
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setNoteList(prevList => [...prevList, newNote])
    setTitle('')
    setNote('')
  }

  const onChangeTitle = event => setTitle(event.target.value)

  const onChangeNote = event => setNote(event.target.value)

  return (
    <BgCont>
      <Title>Notes</Title>
      <MainCont>
        <form onSubmit={onClickAdd}>
          <TitleInput
            type="text"
            placeholder="Title"
            onChange={onChangeTitle}
            value={title}
          />{' '}
          <br />
          <NotesInput
            cols="4"
            rows="4"
            placeholder="Take a Note..."
            onChange={onChangeNote}
            value={note}
          />{' '}
          <br />
          <BtnAdd type="submit">Add</BtnAdd>
        </form>
      </MainCont>
      {noteList.length === 0 ? (
        <OutputCont1>
          <Imagee
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <OutputTitle>No Notes Yet</OutputTitle>
          <OutputDesc>Notes you add will appear here</OutputDesc>
        </OutputCont1>
      ) : (
        <OutputCont>
          {noteList.map(eachNote => (
            <NoteItem key={eachNote.id} details={eachNote} />
          ))}
        </OutputCont>
      )}
    </BgCont>
  )
}
export default Notes
