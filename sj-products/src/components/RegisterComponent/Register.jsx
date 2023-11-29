import "./register-component.scss";
import { register } from "../../services/userService";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Register() {

  const navigate = useNavigate(); 
  const [error, setError] = useState('')

  async function onRegisterHandler(email, password) {
    try{
      const userData = await register(email, password);
      sessionStorage.setItem('userData', JSON.stringify({id: userData._id, accessToken: userData.accessToken}));
      navigate('/');
    } catch(error) {
      console.log(error);
    }
  }

  function onRegisterSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const email = formData.get('email');
      const password = formData.get('password');
      const repassword = formData.get('repassword'); 

      if (password !== repassword) {
        setError('Паролите не съвпадат!')
        return;
      }

      onRegisterHandler(email, password);
      console.log(email, password);
  }

  return (
    <section className="register-section">
      <form className="register-form" onSubmit={onRegisterSubmit}>
        <div>
          <label htmlFor="email">Имейл</label>
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

        <div>
          <label htmlFor="repassword">Потвърди Паролата</label>
          <input
            type="password"
            name="repassword"
            id="repassword"
            placeholder="******"
            required
            minLength="6"
          />
        </div>

        {error && <p className="error-messgae">{error}</p>}

        <button type="submit">Регистрирай се</button>
        <p>
          Вече имаш акаунт?
          <Link to="/login">Влез тук</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
