import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./Router";
import injectContext from "./store/context";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default injectContext(App);
