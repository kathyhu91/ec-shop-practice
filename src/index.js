// 匯入React
import React from 'react';
import ReactDOM from 'react-dom/client';

// 匯入自定義 components
import Header from './components/header.js'
import Main from './components/main.js'
import Footer from './components/footer.js'

// 匯入CSS
import "./style/css/reset.css";
import "./style/css/base.css";
import "./style/css/main.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/> 
    <Footer/>
  </React.StrictMode>
);
