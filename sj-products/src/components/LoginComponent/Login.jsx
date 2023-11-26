import "./login-component.scss";
import {Link} from 'react-router-dom';
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate(); 

  async function onLoginHandler (e) {
    e.preventDefault();
   const userData = await login('peter@abv.bg', '123456'); 
   console.log(userData);
   sessionStorage.setItem('userData', JSON.stringify(userData))
   navigate('/');
  }


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
          <Link to="/register" className="to-register">Регистрирай се тук!</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
