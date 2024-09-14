import { Principal, Login } from "./views";

export const routes = [
  {
    path: "/",
    element: <Principal />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];
