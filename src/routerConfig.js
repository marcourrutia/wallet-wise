import { Maintainer, LogIn, SignUp, PrincipalMarco, Home } from "./views";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Layout } from "./components";
import {
  LoadingSignIn,
  LoadingSignOut,
  PrivateRoute,
  PublicRoute,
} from "./services";

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
    path: "/loadingsignout",
    element: (
      <SignedOut>
        <LoadingSignOut />
      </SignedOut>
    ),
  },
  {
    path: "/maintainer",
    element: (
      <PrivateRoute>
        <Layout>
          <Maintainer />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Layout>
          <Home />
        </Layout>
      </PrivateRoute>
    ),
  },
];
