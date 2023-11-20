import "./header-component.scss";
import logo from "./all.jpg";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul role="list" className="navigation">
          <li className="navItem">Начало</li>
          <li className="navItem">Продукти</li>
          <li className="navItem">За Нас</li>
          <li className="navItem">Контакти</li>
        </ul>
      </nav>

      <ul role="list" className="login-register">
        <li>Вход</li>
        <li>Регистрация</li>
      </ul>
    </header>
  );
}

export default Header;
