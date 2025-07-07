import { createElement } from "./lib/react.js";
import { createRoot } from "./lib/react-dom.js";

const listData = {
  items: [],
};

// listData.items 이때
// 특정 함수 실행


// 우회, 대체

// reactiveListData.items
// reactiveListData.items = [..]


/* 

target    : 원래 감싼 대상 객체 (listData)  => { items:[...] }
prop      : 접근하려는 속성 키              => 'items'
newValue  : 새로 설정하려는 값              => [ ...reactiveListData.items,{...} ]

*/

const reactiveListData = new Proxy(listData,{

  get(target,prop){
    return target[prop];
  },

  set(target,prop,newValue){
    const oldValue = target[prop];

    target[prop] = newValue;
    render();

    return true;
  }
})



const root = createRoot(document.getElementById("app"));


function render() {
  const children = listData.items.map(({ id, title }) => {
    const liElement = createElement(
      "li",
      { key: id, className: "item" },
      createElement("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
      createElement("span", { className: "content" }, title),
      createElement(
        "button",
        { type: "button", title: "아이템 이동" },
        createElement("img", { src: "/icons/icon.svg", alt: "아이템 이동" })
      )
    );
    return liElement;
  });

  const ulElement = createElement(
    "ul",
    { className: "planet", lang: "en" },
    children
  );

  root.render(ulElement);
}


render();




setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id:1,
      title:'Life on Earth'
    }
  ]
}, 1000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id:2,
      title:'Life on Earth'
    }
  ]
}, 2000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id:3,
      title:'Life on Earth'
    }
  ]
}, 3000);

setTimeout(() => {
  reactiveListData.items = [
    ...reactiveListData.items,
    {
      id:4,
      title:'Life on Earth'
    }
  ]
}, 4000);