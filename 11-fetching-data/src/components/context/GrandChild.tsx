import { useUserContext } from "@/hook/useUserContext";
import { useTheme } from "./ThemeContext";

function GrandChild() {


  const {username,setUsername} = useUserContext()
  const {theme:{colors,spacing},toggleTheme} = useTheme();


  return (
    <div style={{
      background:colors.background,
      color:colors.primary,
      border:'1px solid gray',
      padding:spacing.md
    }}>
      <h4>바뀐다333333</h4>
      <button
        type="button"
        onClick={toggleTheme}
        style={{padding:spacing.md,margin:spacing.md}}
      >CHANGE THEME</button>
      <p
        style={{
          marginBottom:spacing.lg
        }}
        >안녕하세요 {username} 님!</p>
      <button
        type="button"
        onClick={()=>{
          setUsername('김정주')
        }
      }> 나도 사용자 변경! </button>
    </div>
  )
}
export default GrandChild