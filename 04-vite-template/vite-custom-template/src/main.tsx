/* eslint-disable react/react-in-jsx-scope */

// import React from 'react'
// 17+

import {createRoot} from 'react-dom/client';
import Main from './components/Main';

/* 

npm i vite -D
npm i react react-dom
npm i @types/react @types/react-dom @types/node
npm i @vitejs/plugin-react
npm init @eslint/config@latest
npm i -D eslint-plugin-react-hooks eslint-plugin-react-refresh

 */



const container = document.getElementById('app');

if(container){
  
  // 렌더링...
  createRoot(container).render(<Main></Main>)
}else{
  console.warn('문서에 #app 요소가 존재하지 않습니다.');
  
}