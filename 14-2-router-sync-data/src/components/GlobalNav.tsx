import { routes } from "@/router/routes"
import extractNavItems from "@/utils/extractNavItems"
import { NavLink } from "react-router"


function GlobalNav() {

  const S = {
    display:'flex',
    gap:'1rem',
    listStyle:'none'
  }

  const navList = extractNavItems(routes.routes)
  
  return (
    <nav>
      <ul style={S}>
        {
          navList.map(({path,label})=>(
            <li key={path}>
              <NavLink style={({isActive}) => ({color:isActive ? 'blue' : 'black'})} to={path}>{label}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default GlobalNav