import AccessDom from "@/pages/AccessDom";
import Home from "@/pages/Home/Home";
import Remember from "@/pages/Remember";





export const routes = [
  {
    title:'리액트 애니메이션',
    path:'/',
    element: <Home />
  },
  {
    title:'리-렌더없이 기억하기',
    path:'/re-render',
    element: <Remember />
  },
  {
    title:'DOM 노드 접근 / 조작',
    path:'/access-dom',
    element: <AccessDom />
  },
]











