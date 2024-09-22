import {
  Home,
  Maintainer,
  LogIn,
  SignUp,
  PrincipalMarco,
  DashBoard,
} from "./views";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Layout } from "./components";
import { PrivateRoute, PublicRoute } from "./services";

export const routes = [
  {
    path: "/",
    element: (
      <SignedOut>
        <PrincipalMarco />
      </SignedOut>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignUp />
      </PublicRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LogIn />
      </PublicRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <SignedIn>
        <Layout>
          <Home />
        </Layout>
      </SignedIn>
    ),
  },
  {
    path: "/maintainer",
    element: (
      <SignedIn>
        <Layout>
          <Maintainer />
        </Layout>
      </SignedIn>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
  },
];
