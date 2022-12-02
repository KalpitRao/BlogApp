import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Pages/About';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import ResponsiveAppBar from './Components/Navbar';
import AddPost from './Pages/AddPost';
import Login from './Pages/Login';
import Signup_Login from './Pages/Signup_Login';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar/>
        <Routes>
          <Route path="/"  exact element={<Login />}/>
          <Route path="/home"  exact element={<Home />}/>
          <Route path="/addPost" element={<AddPost />}/>
          <Route path="/editPost/:id" element={<AddPost />}/>
          <Route path="/Blog/:id" element={<Blog />}/>
          <Route path="/about/" element={<About />}/>
        </Routes>
      </div>  
    </BrowserRouter>

  );
}

export default App;
