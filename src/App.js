import React, {useState} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Recipe from "./Pages/Recipe";
import Navbar from "./Components/Navbar";
import './style/main.css';



function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="About" element={ <About/> } />
          <Route path="Contact" element={ <Contact/> } />
          <Route path="Recipe" element={ <Recipe/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App