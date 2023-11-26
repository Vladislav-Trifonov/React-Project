import './register-component.scss';


function Register() {
  return (
    <section className="register-section">
      <form className="register-form">
        <div>
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            id="email"
            placeholder="username@gmail.com"
            required
            pattern="^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$"
          />
        </div>

        <div>
          <label for="password">Password</label>
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
          <label for="repassword">Confirm password</label>
          <input
            type="password"
            name="repassword"
            id="repassword"
            placeholder="******"
            required
            minlength="6"
          />
        </div>

        <button type="submit">Sign up</button>

        <p>
          Already have an account?
          <a routerLink="/login">Sign in</a>
        </p>
      </form>
    </section>
  );
}

export default Register;
