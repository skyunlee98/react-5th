import useAuth from "@/hook/useAuth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";




function RequireAuth({children}:{children:React.ReactNode}) {
  
  const {isAuth} = useAuth();
  
  const location = useLocation();
  const navigate = useNavigate();



  useEffect(()=>{
    if(!isAuth){
      // state : 로그인 성공 후 location.state.from
      // replace : 뒤로가기 방지
      // preventScrollReset : 스크롤 맨 위로 리셋하는 동작 차단
      navigate('/auth/login', { state:{from: location}, replace:true, preventScrollReset:true })
    }
  },[isAuth])




  if(!isAuth) return null;

  return <>{children}</>
}
export default RequireAuth