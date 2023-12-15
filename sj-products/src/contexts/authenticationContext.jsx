import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { login, register } from "../services/userService";

import useConstantState from "../hooks/useConstantState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useConstantState("auth", {});

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

  function onRegisterHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const repassword = formData.get("repassword");

    if (password !== repassword) {
      setError("Паролите не съвпадат!");
      return;
    }

    async function onRegisterHandler(email, password) {
      try {
        const userData = await register(email, password);

        sessionStorage.setItem("accessToken", userData.accessToken);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

    onRegisterHandler(email, password);
    console.log(email, password);
  }

  const logoutHandler = () => {
    setAuth({});
    sessionStorage.removeItem("accessToken");
  };

  const values = {
    onLoginHandler,
    onRegisterHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
