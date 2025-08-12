import type { NavItem, RouteWithHandle } from "@/@types/global";
import { joinPaths } from "./joinPath";


function extractNavItems(routes:RouteWithHandle[], parentPath = '') : NavItem[] {

  const navItems = [];

  for( const route of routes ){
    
    const path = route.index ? parentPath || '/' : joinPaths(parentPath, route.path);

    if(route.handle?.showInNav && route.handle?.label){
      navItems.push({label:route.handle.label, path})
    }

    if(route.children){
      navItems.push(...extractNavItems(route.children,path))
    }
  }

  return navItems;
}

export default extractNavItems