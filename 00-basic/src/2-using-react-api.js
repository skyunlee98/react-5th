/* eslint-disable @typescript-eslint/no-unused-vars */


import React, {createElement} from "./lib/react.js";
import ReactDOM, {createRoot} from "./lib/react-dom.js";


console.log(React.version);
console.log(ReactDOM.version);


const button = React.createElement('button',{type:'button',},'hello');

const div = React.createElement('div',{
    className:'tiger',
    lang:'en',
    'aria-label':'버튼 태그의 부모'
  },
  button);


const app = document.getElementById('app');

const root = ReactDOM.createRoot(app/* 렌더링 위치 */)

root.render(div);