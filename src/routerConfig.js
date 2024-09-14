import { Principal , LogIn, SignUp} from "./views";

export const routes = [
  {
    path: "/",
    element: <Principal />,
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
