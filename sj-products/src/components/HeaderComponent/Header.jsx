import "./header.scss";
import logo from "./all.jpg";
import { Link } from "react-router-dom";
import { logout } from "../../services/userService";

function Header() {

  const hasUser = sessionStorage.getItem('userData');
  
  const logout = () => {
    sessionStorage.removeItem('userData')
  }

  return (
    <header className="header">
      <nav className="navigation">
          <Link to="/" className="navigation-item">Начало</Link>
          <Link to="/products" className="navigation-item">Продукти</Link>
          <Link to="/" className="navigation-item">За Нас</Link>
          <Link to="/create" className="navigation-item">Добави Продукт</Link>
          <Link to="/" className="navigation-item">Контакти</Link>
      </nav>

      <div className="login-register">

        {hasUser == null ?
          <>
           <Link to="/login" className="login-register">Вход</Link>
           <Link to="/register" className="login-register">Регистрация</Link>
          </>
          : <button className="logout-btn" onClick={logout}>Изход</button>}
     
      </div>
    </header>
  );
}

export default Header;
