import { Principal, Login , LogIn, SignUp} from "./views";

export const routes = [
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/login",
    element: <Login />,
  }, 
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
];
