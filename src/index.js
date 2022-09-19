import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React,{fragment} from 'react'
// import {BrowserRouter, Link} from 'react-router-dom'
// import styles from './styles.module.css'
// import Product from './Products'
// import About from './About'

// function NavBar(){
//   return (

//   <>
// <Fragment>

// <BrowserRouter>
//   <NavBar/>
//   <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/Product' element={<Product/>}/>
//     <Route path='/About' element={<About/>}/>
//     <Routes path="*" element={<h1>404 not found</h1>}/>
//   </Routes>
// </BrowserRouter>
// </Fragment>
//   </>
//   )
// }