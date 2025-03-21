import { LogIn, SignUp, Principal, Home, Maintainer, GoalBase } from "./views";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Layout, OptionDetailFlow } from "./components";
import {
  UseSignIn,
  LoadingSignOut,
  PrivateRoute,
  PublicRoute,
} from "./services";
import { FinanceChartView } from "./views/Graphics/FinanceChartView";

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
  {
    path: "/detailflow/:accountId/basicfinancial",
    element: (
      <PrivateRoute>
        <Layout>
          <FinanceChartView />
        </Layout>
      </PrivateRoute>
    ),
  },
  {
    path: "/detailflow/:accountId/goalbase",
    element: (
      <PrivateRoute>
        <Layout>
          <GoalBase />
        </Layout>
      </PrivateRoute>
    ),
  },
];
