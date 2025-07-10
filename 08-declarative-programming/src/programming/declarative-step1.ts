import createState from "@/lib/createState";


const data = {
  checked: false
}


/* 
**state가 변경될 때** 호출되는 '렌더 함수'
react에서 컴포넌트가 리렌더링되는 효과를 흉내
 */
const render = () => {

  const {checked} = state; // 상태 의존

  // checkbox.checked = checked;
  // if(checked){
  //   button.removeAttribute('disabled');
  //   button.textContent = '활성 상태'
  // }else{
  //   button.setAttribute('disabled','true');
  //   button.textContent = '비활성 상태'
  // }

  console.log('re-render');

  checkbox.checked = checked;
  if(checked){
    button.removeAttribute('disabled');
    button.textContent = '활성 상태';
  }else{
    button.setAttribute('disabled','true');
    button.textContent = '비활성 상태';
  }

}

/* typescript */
declare global {
  var update: (value:boolean) => void;
}

/* 
setState('checked',value) 호출 시 render() 함수도 함께 호출됨 -> UI 갱신
globalThis.update 등록한 이유 : 브라우저 콘솔에서 update(true) 테스트할 수 있도록
*/
const update = (globalThis.update = (value) => {
  setState('checked',value);
})

/* 
state : 현재 상태
setState : 상태를 업데이트하고 render()를 실행시켜주는 함수
React의 const [count,setCount] = useState(0) 유사합니다.
*/
const [state, setState] = createState(data,render)

console.log('초기 상태', state.checked);


const container = document.getElementById('declarative-programming')!;
const checkbox = container.querySelector('input[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button') as HTMLButtonElement;



checkbox.addEventListener('change',(e:Event)=>{
  const {checked} = e.target as HTMLInputElement

  update(checked)

})