import { Maintainer, LogIn, SignUp, Principal, Home, DetailFlow } from "./views";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Layout, OptionDetailFlow } from "./components";
import {
  UseSignIn,
  LoadingSignOut,
  PrivateRoute,
  PublicRoute,
} from "./services";

export const routes = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Principal />
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
    path: "/usesignin",
    element: (
      <SignedIn>
        <UseSignIn />
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
  },,
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
  {
    path: "/detailflow/:accountId",
    element: (
      <PrivateRoute>
        <Layout>
          <OptionDetailFlow />
        </Layout>
      </PrivateRoute>
    ),
  },
];
