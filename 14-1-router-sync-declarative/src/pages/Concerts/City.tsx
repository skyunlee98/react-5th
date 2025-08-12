import { useParams } from "react-router"

function City() {

  const {city} = useParams()

  return (
    <div>
      <h2>{city}의 콘서트 목록</h2>
    </div>
  )
}
export default City