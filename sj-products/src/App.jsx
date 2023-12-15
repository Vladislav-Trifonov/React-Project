import { useState, useEffect } from "react";

import { AuthProvider } from "./contexts/authenticationContext";

import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import FirstCarousel from "./components/FirstCarouselComponent/FirstCarousel";
import SecondCarousel from "./components/SecondCarouselComponent/SecondCarousel";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/HomeComponent/Home";
import Products from "./components/ProductsComponent/Products";
import ThirdCarousel from "./components/ThirdCarouselComponent/ThirdCarousel";
import Create from "./components/CreateComponent/Create";
import AuthGuard from "./components/GuardsComponents/AuthGuard";
import ProductDetails from "./components/ProductDetailsComponent/ProductDetails";

function App() {
  const components = [FirstCarousel, SecondCarousel, ThirdCarousel];

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home components={components} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />

        <Route element={<AuthGuard />}>
          <Route path="/games/create" element={<Create />} />
          <Route path="/products/edit/:productId" element={<Create />} />
          <Route path="/logout" element={<Create />} />
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
