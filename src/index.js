import React from "react";
import reactDom from "react-dom";
import "./index.css";
import App from "./App";
import Footer from "./Components/Footer";

reactDom.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
