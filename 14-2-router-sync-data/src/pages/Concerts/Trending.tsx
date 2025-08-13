import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useFetcher, useLoaderData, type LoaderFunctionArgs } from "react-router"


function Trending() {

  const users = useLoaderData() as User[];
  const fetcher = useFetcher();

  // loader 재사용 

  const handleClick = (userId:number) => {
    fetcher.load(`/users/${userId}`)
  }



  return (
    <div>
      <h1>트렌드 콘서트 유저 리스트</h1>
      {
        users.map((user)=>(
          <li key={user.id}>
            <button type="button" onClick={()=> handleClick(user.id)}>{user.name}</button>
          </li>
        ))
      }

      <hr />

      {
        fetcher.data?.user && (
          <Suspense fallback={<p>로딩 중...</p>}>
            <Await resolve={fetcher.data.user}>
              {(user: User) => (
                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                </div>
              )}
            </Await>
          </Suspense>
        )
      }
    </div>
  )
}
export default Trending




export async function loader(args:LoaderFunctionArgs){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}