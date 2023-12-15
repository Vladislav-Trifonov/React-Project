import "./login.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../contexts/authenticationContext";

function Login() {

  const { onLoginHandler } = useContext(AuthContext);

  return (
    <section className="login-section">
      <form className="login-form" onSubmit={onLoginHandler}>
        <div>
          <label htmlFor="email">Имейл:</label>
          <input
            name="email"
            id="email"
            placeholder="username@gmail.com"
            required
            pattern="^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$"
          />
        </div>

        <div>
          <label htmlFor="password">Парола</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            required
            minLength="6"
          />
        </div>

        <button type="submit">Влез</button>

        <p className="no-account">
          Все още нямаш акаунт?
          <Link to="/register" className="to-register">
            Регистрирай се тук!
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
