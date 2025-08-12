import type { User } from "@/@types/global"
import { useLoaderData, type LoaderFunctionArgs } from "react-router"


function Trending() {
  
  const users = useLoaderData() as User[];


  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
        {
        users.map((user)=>(
          <li key={user.id}>
            <span>{user.name}</span>
          </li>
        ))
      }
    </div>
  )
}
export default Trending




export async function loader(args:LoaderFunctionArgs){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}