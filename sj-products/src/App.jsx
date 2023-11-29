import { useState, useEffect } from "react";
import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import FirstCarousel from "./components/FirstCarouselComponent/FirstCarousel";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from "./components/HomeComponent/Home";
import Products from "./components/ProductsComponent/Products";

function App() {

  function handleCallbackResponse(response) {
    
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "19576311585-13clafpa2c19l37che4asgdr37sdsg6b.apps.googleusercontent.com",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
    )
  }, [])

  const components = [FirstCarousel, Register]; 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home components={components}/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
