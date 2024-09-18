import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import injectContext from "./store/context";
import { Navbar } from "./components";
import React from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const clientId = "866333680498-7o58cndhc6vk03g4hreeu89pga5nsd0j.apps.googleusercontent.com"; 

  return (
    <BrowserRouter>
      <div className="App">
        <GoogleOAuthProvider clientId={clientId}>
          <Navbar />
          <AppRouter />
        </GoogleOAuthProvider>
      </div>
      ;
    </BrowserRouter>
  );
}

export default injectContext(App);
