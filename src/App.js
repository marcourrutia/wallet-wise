import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import injectContext from "./store/context";
import { Navbar, NavMarco } from "./components";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ClerkProvider } from "@clerk/clerk-react";

function App() {
  const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <AppRouter />
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default injectContext(App);
