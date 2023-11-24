import './login.scss'; 

function Login() {
  return (
    <section className="login-section">
      <form action="" className="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="text" id="password" />
        </div>
      </form>
    </section>
  );
}

export default Login;
