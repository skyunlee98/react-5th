import { useState } from "react";



function Counter() {

  const [number, setNumber] = useState(0);


  const handleClick = () => {
    
    setNumber(number + 1)
    // setNumber(number + 1)
    // setNumber(number + 1)

    alert(number);
  }

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}> + </button>
    </>
  )
}
export default Counter;