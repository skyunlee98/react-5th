import { useEffect, useLayoutEffect } from "react"


/* 

[1] 렌더링 시작
[2] DOM 업데이트
[3] useLayoutEffect 실행  동기적 방식
[4] 화면 그림 (commit)
[5] useEffect 실행


useLayoutEffect는 동기적으로 실행되기 때문에
렌더링이 끝나기 전까지 브라우저를 일시정지함.

복잡한 로직, API요청을 넣으면 렌더링 지연이 발생함.

레이아웃 측정/수정

*/

function Parent() {

  useLayoutEffect(()=>{
    console.log('useLayoutEffect');

    return () => console.log('layout cleanup');

  })

  useEffect(()=>{
    console.log('useEffect');

  })

  console.log('render');


  return (
    <div>
      
    </div>
  )
}
export default Parent