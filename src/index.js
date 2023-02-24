// 匯入React
import React from 'react';
import ReactDOM from 'react-dom/client';

// 匯入自定義 components
import Header from 'components/Header.jsx'
import Main from 'components/Main.jsx'
import Footer from 'components/Footer.jsx'

// 匯入CSS
import "style/css/main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/> 
    <Footer/>
  </React.StrictMode>
);
