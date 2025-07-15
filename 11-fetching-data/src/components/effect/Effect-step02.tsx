
import { useEffect, useState } from "react"



function Effect() {

  const [users, setUsers] = useState<User[] | null>(null);
  const [loading,setLoading] = useState(true);

  /* 
    useEffect를 사용해서 데이터 fetch
    fetch 데이터를 list rendering
  */

  //     useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("네트워크 응답 오류");
  //       return res.json();
  //     })
  //     .then((data: User[]) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch((err: Error) => {
  //       console.error("데이터 가져오기 실패:", err);
  //       setError(err);
  //       setLoading(false);
  //     });
  // }, []);
  
  useEffect(()=>{

    const fetchData = async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      if(response.ok){
        setUsers(data);
        setLoading(false)
      }else{
        console.error('error!!');
        setLoading(false)
      }
    } 
     
    fetchData()

  },[])


  if(loading) return <p>loading....</p>

  return (
    <ul>
      {
        users && users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))
      }
    </ul>
  )
}
export default Effect