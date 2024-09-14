import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import injectContext from "./store/context";
import { Navbar } from "./components";
import React from "react";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
