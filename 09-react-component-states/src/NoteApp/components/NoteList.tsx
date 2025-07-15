import { convertSlug } from "@/utils/convertSlug"
import type { Note } from "../api/getNote"
import './NoteList.css'
import { ROUTES } from "../routes";




interface Props {
  list:Note[];
  onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}

function NoteList({list,onChangeRoute}:Props) {


  // 핸들러 함수를 추가
  // 핸들러 바인딩
  // onChangeRoute(next,id) 실행
  
  const handleClick = (pickNoteId:number) => (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    onChangeRoute(ROUTES.detail,pickNoteId)
    
  }
  

  return (
    <div className="NoteList">
      <h2>노트 필기 목록</h2>
      <ul>
        {
          list.map(item => {
            const slug = `#${convertSlug(item.title)}`

            return (
              <li key={item.id}>
                <a href={slug} onClick={handleClick(item.id)}>{item.title}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default NoteList