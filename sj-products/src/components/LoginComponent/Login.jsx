import "./login-component.scss";
import {Link} from 'react-router-dom';

function Login() {
  return (
    <section className="login-section">
      <form class="login-form">
        <div>
          <label htmlFor="email">Имейл:</label>
          <input
            ngModel
            name="email"
            id="email"
            autofocus
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
            minlength="6"
          />
        </div>

        <button type="submit">Влез</button>

        <p class="no-account">
          Все още нямаш акаунт?
          <Link to="/register" className="to-register">Регистрирай се тук!</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
