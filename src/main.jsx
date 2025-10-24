
import React from "react"; 
import ReactDOM from "react-dom/client"; 
import { BrowserRouter } from "React-router-dom"; 
import App from "./App.jsx"; 
import "./pages/styles/globals.css"; 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
  <React.StrictMode> 
    <BrowserRouter> 
      <App /> 
    </BrowserRouter> 
  </React.StrictMode> 
); 