import { useState } from "react";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import FirstCarousel from "./components/FirstCarouselComponent/FirstCarousel";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/HomeComponent/Home";

function App() {

  const components = [FirstCarousel, Register]; 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home components={components}/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
