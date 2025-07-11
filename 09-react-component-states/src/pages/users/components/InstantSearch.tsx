import { useId } from "react"


interface Props {
  onToggle: ()=> void;
  isInstantSearch:boolean;
}


function InstantSearch({onToggle,isInstantSearch}:Props) {
  const id = useId();

  return (
    <div className="formControl">
      <label htmlFor={id} style={{userSelect:'none'}}>
        <input
          id={id}
          type="checkbox"
          defaultChecked={isInstantSearch}
          onClick={onToggle}
        />
        {' '}
        인스턴트 서치
      </label>
    </div>
  )
}
export default InstantSearch