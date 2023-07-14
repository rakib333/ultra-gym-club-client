// import React from 'react';
import './App.css'
import Home from "./components/MainLayout/Home";
import Products from './components/Products/Products';


const App = () => {
  return (
    <div className="container">
      <Home></Home>
      <Products></Products>
    </div>
  );
};

export default App;