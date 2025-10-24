import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>{children}</main>
      <Footer />
    </div>
  );
}