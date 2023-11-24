import "./header-component.scss";
import logo from "./all.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
          <Link to="/" className="navigation-item">Начало</Link>
          <Link to="/" className="navigation-item">Продукти</Link>
          <Link to="/" className="navigation-item">За Нас</Link>
          <Link to="/" className="navigation-item">Контакти</Link>
      </nav>

      <div className="login-register">
        <Link to="/login">Вход</Link>
        <Link to="/register">Регистрация</Link>
      </div>
    </header>
  );
}

export default Header;
