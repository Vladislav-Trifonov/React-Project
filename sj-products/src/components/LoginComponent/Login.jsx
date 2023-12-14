import "./login.scss";
import { Link } from "react-router-dom";
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {

  const navigate = useNavigate();

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '7312675582085833',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v12.0',
      });
    };

    // Load the SDK asynchronously
    function loadSdkAsynchronously(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }

    loadSdkAsynchronously(document, 'script', 'facebook-jssdk');
  }, []);

  function onFacebookLoginHandler() {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          // User is logged in
          console.log('Facebook login successful:', response);
          // You can now handle the response, e.g., send it to your server for authentication
        } else {
          console.log('Facebook login failed:', response);
        }
      },
      { scope: 'email' } // Specify the required permissions
    );
  }

  async function onLoginHandler(e) {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
  
    try {
      const userData = await login(email, password);
      const accessToken = userData.accessToken; 
      console.log(accessToken);
      sessionStorage.setItem("accessToken", accessToken);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
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
          <Link to="/register" className="to-register">
            Регистрирай се тук!
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
