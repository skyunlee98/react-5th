
import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';
import { useAuth } from '@/auth/AuthProvider';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { getAvatarUrl } from '@/api/getAvatarUrl';


function Header() {

  const { user, isAuth, logout } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState<string|null>(null)
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  
  const visibleRoutes = routes.filter(({title})=>{
    if(isAuth) return title !== '로그인' && title !== '회원가입' && title !== '상품상세';
    else return title !== '회원가입'
  })

  

  useEffect(()=>{
    
    const fetchAvatarUrl = async () => {
      if(user){
        const url = await getAvatarUrl(user.id);
        setAvatarUrl(url);
        setIsAvatarLoaded(true);
      }
    }
    fetchAvatarUrl()

  },[user])

  
  /* 
  
    getAvatarUrl(user.id)을 사용해서 화면에 이미지를 렌더링
    
    1. useEffect를 사용해주세요.
    2. getAvatarUrl 실행 (비동기 함수 ? )
    3. getAvatarUrl -> return 값 확인
    4. 값 상태 관리 (useState)
    5. 상태 조건에 따라 렌더링 
    

    [추가]
    -> 사용자가 프로필 이미지를 올리지 않았을 때 보이는 기본 이미지 

  */

  


  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className='a11y-hidden'>메인 메뉴</h2>
        <ul>
          {
            visibleRoutes.map(({path,title})=>(
              <li key={path}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            ))
          }
          {
            isAuth && (
              <li>
                {
                 isAvatarLoaded &&
                  <img 
                    style={{
                      width:'30px',
                      position:'absolute',
                      right:'1px',
                      top:'1px'
                    }}
                    src={avatarUrl ?? '/vite.svg'} 
                    alt="프로필" 
                  />
                }
                <a onClick={(e)=>{
                  e.preventDefault();
                  Swal.fire({
                    title:'정말 로그아웃 하시겠습니까?',
                    icon:'warning',
                    showCancelButton: true,
                    confirmButtonText: "로그아웃",
                    cancelButtonText: "돌아가기",

                  }).then((result)=>{
                    if (result.isConfirmed) {
                      logout()
                    }
                  })

                }} href="">로그아웃</a>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header