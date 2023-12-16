import "./register.scss";
import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/authenticationContext";
import { Link } from "react-router-dom";

function Register() {

  const { onRegisterHandler, error, setError } = useContext(AuthContext);

  useEffect(() => {
    setError('');
  }, [])

  return (
    <section className="register-section">
      <form className="register-form" onSubmit={onRegisterHandler}>
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

        <button type="submit">Регистрирай се</button>

        {error && <p className="server-error">{error}</p>}
        <p>
          Вече имаш акаунт?
          <Link to="/login">Влез тук</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
