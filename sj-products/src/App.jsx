import { AuthProvider } from "./contexts/authenticationContext";

import { Routes, Route } from "react-router-dom";

import Header from "./components/HeaderComponent/Header";
import Footer from "./components/FooterComponent/Footer";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import FirstCarousel from "./components/FirstCarouselComponent/FirstCarousel";
import SecondCarousel from "./components/SecondCarouselComponent/SecondCarousel";
import Home from "./components/HomeComponent/Home";
import Products from "./components/ProductsComponent/Products";
import ThirdCarousel from "./components/ThirdCarouselComponent/ThirdCarousel";
import Create from "./components/CreateComponent/Create";
import Edit from "./components/EditComponent/Edit";
import GuestGard from "./components/GuardsComponents/GuestGuard";
import UserGard from "./components/GuardsComponents/UserGuard";
import ProductDetails from "./components/ProductDetailsComponent/ProductDetails";
import Logout from "./components/LogoutComponent/Logout";
import Profile from "./components/ProfileComponent/Profile";

function App() {
  const components = [FirstCarousel, SecondCarousel, ThirdCarousel];

  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home components={components} />} />

        <Route element={<UserGard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />

        <Route element={<GuestGard />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/products/:productId/edit" element={<Edit />} />
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
