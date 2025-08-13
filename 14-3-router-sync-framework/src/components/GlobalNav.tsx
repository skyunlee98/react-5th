import { NAV } from "@/utils/nav-config"
import { useEffect, useState } from "react";
import { NavLink } from "react-router"


function GlobalNav() {

  // const navList = extractNavItems(routes.routes)

  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    if(mounted) {
      // ....
      // localStorage.getItem()
    }

  })



  return (
    <header style={{ padding:8, borderBottom: '1px solid #eee' }}>
      <nav style={{display:'flex', gap:12}}>
        {
          NAV.map(({to,label})=>(
            <NavLink key={to} to={to}>{label}</NavLink>
          ))
        }
      </nav>
    </header>
  )
}
export default GlobalNav