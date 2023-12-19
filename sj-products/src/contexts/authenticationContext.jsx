import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, register } from "../services/userService";

import useConstantState from "../hooks/useConstantState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useConstantState("auth", {});
  const [error, setError] = useState(''); 

  async function onLoginHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const userData = await login(email, password);
      setAuth(userData);
      sessionStorage.setItem("accessToken", userData.accessToken);
      navigate("/");
    } catch (error) {
      if (error.message === 'Failed to fetch') {
          setError('Сървърът не е свързан!')
      } else {
        setError('Грешен имейл или парола. Моля опитайте отново!')
      }
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

        setAuth(userData);

        sessionStorage.setItem("accessToken", userData.accessToken);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }

    onRegisterHandler(email, password);
   
  }

  const logoutHandler = () => {
    setAuth({});
    sessionStorage.removeItem("accessToken");
  };

  const values = {
    onLoginHandler,
    onRegisterHandler,
    logoutHandler,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
    accessToken: auth.accessToken,
    error,
    setError
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
