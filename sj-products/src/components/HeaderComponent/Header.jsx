import "./header.scss";
import logo from "./all.jpg";
import { Link } from "react-router-dom";
import { logout } from "../../services/userService";
import AuthContext from "../../contexts/authenticationContext";
import { useContext } from "react";

function Header() {
  const hasUser = sessionStorage.getItem("userData");
  const { isAuthenticated, username } = useContext(AuthContext);

  const logout = () => {
    sessionStorage.removeItem("accessToken");
  };

  return (
    <header className="header">
      <nav className="navigation">
        <Link to="/" className="navigation-item">
          Начало
        </Link>
        <Link to="/products" className="navigation-item">
          Продукти
        </Link>
        {isAuthenticated && <Link to="/create" className="navigation-item">
          Добави Продукт
        </Link>}
      </nav>

      <div className="login-register">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="login-register">
              Вход
            </Link>
            <Link to="/register" className="login-register">
              Регистрация
            </Link>
          </>
        ) : (
          <Link to='/logout' className="logout">
            Изход
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
