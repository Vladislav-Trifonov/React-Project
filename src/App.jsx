import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/HeaderComponent/Header";


function App() {
  const [count, setCount] = useState(0);

  function name(params) {
    
    if (params == '+') {
      setCount(old => old + 1); 
    }

    if (params == '-') {
      setCount(old => old - 1);
    }

  
  }

  return (
    <>

      <Header />

      <h1>Working?</h1>

    

      <h1>Yello</h1>

      <p>Counter {count}</p>

      <button onClick={() => name('+')}>Up</button>
      <button disabled = {count === 0 ? true : false} onClick={() => name('-')}>Down</button>

    </>
  );
}

export default App;
