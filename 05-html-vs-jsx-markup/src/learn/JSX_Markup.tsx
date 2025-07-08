import { imageType, statusMessage } from "@/data/learn"
import DataBinding from "./DataBinding"
import ConditionalRendering from "./ConditionalRendering"


function JSX_Markup() {
  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage} />
      <ConditionalRendering imageType={imageType}/>
    </dl>
  )
}
export default JSX_Markup


// dl, dt, dd