import './register-component.scss';


function Register() {
  return (
    <section className="register-section">
      <form class="register-form">
        <div>
          <label htmlFor="email">Email address</label>
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
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            required
            minlength="6"
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
