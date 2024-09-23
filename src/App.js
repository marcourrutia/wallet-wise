import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import injectContext from "./store/context";
import React, { useEffect, useContext } from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { Context } from "./store/context";

function App() {
  const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  const { store, actions } = useContext(Context);

  if (!PUBLISHABLE_KEY) {
    console.log("error de clerk");
    throw new Error("Missing Publishable Key");
  }

  useEffect(() => {
    console.log(store.isAuthenticated);
  }, [store.isAuthenticated]);

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default injectContext(App);
