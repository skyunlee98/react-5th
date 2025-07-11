import React from "react"

interface Props {
  label:string
  onClick: () => void;
  items:string[]
}

function Child({label,onClick,items}:Props) {
  return (
    <>
      <p>{label}</p>
      <button type="button" onClick={onClick}>자식 버튼</button>
      <ul>
        {
          items.map((item, i)=>(
            <li key={i}>{item}</li>
          ))
        }
      </ul>
    </>
  )
}
export default React.memo(Child)