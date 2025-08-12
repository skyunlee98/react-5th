import { Outlet } from "react-router"

function AuthLayout() {

  const S = {
    border:'1px solid black',
    padding:'2rem'
  }

  return (
    <div style={S}>
      <h1>AuthLayout</h1>
      <hr />
      <Outlet></Outlet>
    </div>
  )
}
export default AuthLayout