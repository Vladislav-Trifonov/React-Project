import { useState, useEffect } from "react";

import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import FirstCarousel from "./components/FirstCarouselComponent/FirstCarousel";
import SecondCarousel from "./components/SecondCarouselComponent/SecondCarousel";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/HomeComponent/Home";
import Products from "./components/ProductsComponent/Products";
import ThirdCarousel from "./components/ThirdCarouselComponent/ThirdCarousel";
import Create from "./components/CreateComponent/Create";

function App() {

  const components = [FirstCarousel, SecondCarousel, ThirdCarousel]; 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home components={components}/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
