import { RouterContext } from "@/router/RouterProvider";
import { useContext } from "react";
import S from './layout/Header.module.css'


interface Props {
  to:string;
  children:React.ReactNode;
  className?:string;
  activeClassName?:string
}

function NavLink({to,children,className = '',activeClassName = S.active}:Props) {


  const {currentPath, setHistoryRoute} = useContext(RouterContext)!;

  const handleLink = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setHistoryRoute(to);
    history.pushState(null,'',to)

  }

  const isActive = currentPath === to;

  const classNames = `${isActive ? activeClassName : ''} ${className}`.trim();


  return (
    <a className={classNames} href={to} onClick={handleLink}>{children}</a>
  )
}
export default NavLink