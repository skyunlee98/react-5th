
import { useUsers } from "@/hook/useUsers";

function Effect() {

  const {users, loading, error} = useUsers()

  if(loading) return <p>loading....</p>
  if(error) return <p>error 발생!!</p>

  return (
    <ul>
      {
        users && users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))
      }
    </ul>
  )
}
export default Effect