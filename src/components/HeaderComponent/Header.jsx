import "./header-component.scss";
import logo from "./all.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav>
        <div className="navigation">
          <Link to="/">Начало</Link>
          <li className="navItem">Продукти</li>
          <li className="navItem">За Нас</li>
          <li className="navItem">Контакти</li>
        </div>
      </nav>

      <div className="login-register">
        <Link to="/login">Вход</Link>
        <Link to="/register">Регистрация</Link>
      </div>
    </header>
  );
}

export default Header;
