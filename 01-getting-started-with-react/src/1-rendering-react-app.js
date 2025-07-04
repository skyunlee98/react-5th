

import { createElement } from "./lib/react.js";
import { createRoot } from "./lib/react-dom.js";


const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};


const children = listData.items.map(({id, title})=>{

  const liElement = createElement('li',{key:id, className:'item'},
    createElement('img',{src:`/planet/image-0${id}.jpg`,alt:''}),
    createElement('span',{className:'content'},title),
    createElement('button',{type:'button',title:'아이템 이동'},
      createElement('img',{src:'/icons/icon.svg',alt:'아이템 이동'})
    ),
  )

  return liElement

})


const ulElement = createElement('ul',{className:'planet',lang:'en'},children)

const root = createRoot(document.getElementById('app'));




function render(){
  root.render(ulElement);
}

render();



setTimeout(() => {
  root.unmount();
},2000);