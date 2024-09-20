import { Home, Maintainer, Principal, LogIn, SignUp } from "./views";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Layout } from "./components";

export const routes = [
  {
    path: "/",
    element: (
      <SignedOut>
        <Principal />
      </SignedOut>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
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
];
