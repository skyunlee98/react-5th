import { Fragment } from "react/jsx-runtime";



interface Props {
  reactLibrary: ReactLibrary;
  items:StatusMessageWithId[]
}


function RenderList({reactLibrary/* object */, items/* array */}:Props) {

  /* 객체의 리스트 렌더링 */

    const renderDefinitionList = (data:ReactLibrary) => {
    const definitionItem = Object.entries(data).map(([key,value])=> (
        <Fragment key={key}>
          <dt>{key}</dt>
          <dd>{value}</dd>
        </Fragment>
    ))
    return <dl className="reactLibrary">{definitionItem}</dl>

  }




  const demoList = [];

  for(const a of items){
    demoList.push(<li key={a.id}> {a.message} </li>)
    /* 배열에 li태그의 값을 넣는다. */
  }
  
  const _demoList = items.map(({id, message}:StatusMessageWithId)=>(
    <li key={id}>{message}</li>
  ))
  
  const renderDemoList = () => items.map(({id,message})=> <li key={id}>{message}</li>)



  // const _renderDemoList = () => {
  //   return items.map(({id,message})=> {
  //     return <li key={id}>{message}</li>
  //   })
  // }




  return (
    <> 
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.
        </p>
        {renderDefinitionList(reactLibrary)}
      </dd>
      <dd>
        <ul>
          {
            items.map(({id,message}:StatusMessageWithId)=> (
              <li key={id}>{message}</li>
            ))
          }
        </ul>
        <hr />
        <ul>
          { demoList }
        </ul>
        <hr />
        <ul>
          { _demoList }
        </ul>
        <hr />
        <ul>
          { renderDemoList() }
        </ul>
      </dd>
      <dd>
        <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
        {
          items.toReversed().map((item,index)=>(
            <li key={item.id ?? index}>{item.message}</li>
          ))
        }
      </dd>
    </>
  )
}



export default RenderList