/* 


<Root/>




element: JSX 엘리먼트를 직접 전달하는 방식 v6+
이미 렌더링된 React Element를 라우터에게 전달하는 방식
매 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅 (lazy 로딩) 매우 불편함
const a = Root()


Component: 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
라우터가 필요할 때만 컴포넌트를 생성하므로, lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
const b = Root

*/


// import Root from "@/pages";
// import Home from "@/pages/Home";
// import About from "@/pages/About";
// import AuthLayout from "@/pages/Auth/AuthLayout";
// import Login from "@/pages/Auth/Login";
// import Register from "@/pages/Auth/Register";
// import RequireAuth from "@/pages/Auth/RequireAuth";
// import City from "@/pages/Concerts/City";
// import ConcertsHome from "@/pages/Concerts/ConcertsHome";
// import Trending from "@/pages/Concerts/Trending";
// import NotFound from "@/pages/NotFound";
import { loader as trendingLoader } from "@/pages/Concerts/Trending.tsx";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router";



const Root = lazy(()=> import('@/pages'))
const Home = lazy(()=> import('@/pages/Home'))
const About = lazy(()=> import('@/pages/About'))


const AuthLayout = lazy(()=> import('@/pages/Auth/AuthLayout'));
const Login = lazy(()=> import('@/pages/Auth/Login.tsx'));
const Register = lazy(()=> import('@/pages/Auth/Register.tsx'));
const RequireAuth = lazy(()=> import('@/pages/Auth/RequireAuth.tsx'));


const ConcertsHome = lazy(()=> import('@/pages/Concerts/ConcertsHome.tsx'));
const Trending = lazy(()=> import('@/pages/Concerts/Trending.tsx'));
const City = lazy(()=> import('@/pages/Concerts/City.tsx'));


const NotFound = lazy(()=> import('@/pages/NotFound'));





export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      { index:true, Component: Home, handle: { label:'Home', showInNav:true }},
      { path:'about', Component: About, handle: { label:'About', showInNav:true } },

      /* auth routes */
      {
        path:'auth',
        Component: AuthLayout,
        children:[
          { path:'login', Component: Login, handle: { label:'Login', showInNav:true } },
          { path:'register', Component: Register, handle: { label:'Register', showInNav:true } },
        ]
      },

      /* concerts routes */
      {
        path:'concerts',
        Component:() => (
          <RequireAuth>
            <Outlet></Outlet>
          </RequireAuth>
        ),
        children:[
          { index:true, Component:ConcertsHome, handle: { label:'Concerts', showInNav:true } },
          { path:':city', Component:City },
          { 
            path:'trending',
            Component:Trending,
            HydrateFallback: () => <div>데이터 로딩 중....</div>,
            handle: { label:'Trending', showInNav:true },
            loader: trendingLoader
            // loader: async () => {
            //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
            //   return res.json();
            // }
          },
        ]
      }
    ]
  },
  { path:'*', Component: NotFound }
])