// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/main.css';
// import Parent from './components/effectAndRef/Parent';
import App from './components/context/App';
// import Parent from './components/ref/Parent';
// import Effect from './components/effect/Effect';


const container = document.getElementById('react-app');

if (container) {
  createRoot(container).render(
      // <Effect />
      // <Parent />
      // <Parent />
      <App></App>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
