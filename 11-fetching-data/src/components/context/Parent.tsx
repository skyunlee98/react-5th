import Child from "./Child"

function Parent() {
  return (
    <div style={{
      border:'1px solid gray',
      padding:'10px'
    }}>
      <h2>바뀐다111111</h2>
      <Child />
    </div>
  )
}
export default Parent