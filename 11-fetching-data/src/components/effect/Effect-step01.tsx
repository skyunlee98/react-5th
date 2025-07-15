import { useEffect, useState } from "react";


/*  react life cycle

[1] 렌더링 시작
[2] DOM 생성 및 그리기 (commit 단계)
[3] useEffect 실행
[4] 사용자 인터렉션 -> 상태 변경 -> 다시 렌더링
[5] 기존 useEffect의 cleanup 실행 -> 새로운 useEffect 실행
*/

function Effect() {

  const [count, setCount] = useState(0);

  console.log('렌더링됨!');

  useEffect(()=>{
    console.log('useEffect 실행!');
    // 데이터 가져오기
    // setCount(count + 1)

    const id = setInterval(()=>{
      console.log('hello ~');
    },1000);

    return () => clearInterval(id)

  },[count])


  return (
    <div>
      <p>카운트 : {count}</p>
      <button type="button" onClick={()=> setCount(count + 1)}> + 1 </button>
    </div>
  )
}
export default Effect