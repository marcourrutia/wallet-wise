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
import { LoadingSignIn, PrivateRoute, PublicRoute } from "./services";

export const routes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <PrincipalMarco />
      </PublicRoute>
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
    path: "/loadingsignin",
    element: (
      <SignedIn>
        <LoadingSignIn />
      </SignedIn>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <SignedIn>
          <Layout>
            <Home />
          </Layout>
        </SignedIn>
      </PrivateRoute>
    ),
  },
  {
    path: "/maintainer",
    element: (
      <PrivateRoute>
        <SignedIn>
          <Layout>
            <Maintainer />
          </Layout>
        </SignedIn>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <SignedIn>
          <DashBoard />
        </SignedIn>
      </PrivateRoute>
    ),
  },
];
