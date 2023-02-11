// 引入React
import React from 'react';
import ReactDOM from 'react-dom/client';

// 引入自定義 components
import Header from './components/header.js'
import Main from './components/main'
import Footer from './components/footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/> */}
    <Main/> 
    {/* <Footer/>   */}
  </React.StrictMode>
);
