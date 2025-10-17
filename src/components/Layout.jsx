import React from "react"; 
import Header from "./Headers"; 
export default function Layout({ children }) { 
  return ( 
    <div> 
      <Header /> 
      <main style={{ padding: "1rem" }}>{children}</main> 
    </div> 
  ); 
} 