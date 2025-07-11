import { useState } from "react"
import { getNoteItem, getNoteList } from "./api/getNote"
import NoteListPage from "./pages/NoteListPage"




function NoteApp() {
  
  const [list,setList] = useState(()=> getNoteList())



  return (
    <NoteListPage list={list}/>
  )
}
export default NoteApp