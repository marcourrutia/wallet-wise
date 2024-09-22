import "./Home";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Context } from "../../store/context";
import { useEffect, useContext } from "react";

export const Home = () => {
  const { actions } = useContext(Context);
  const { user, isSignedIn } = useUser();

  const sendToken = async () => {
    const { firstName, lastName, emailAddresses } = user;
    const email = emailAddresses[0].emailAddress;
    actions.postToken(firstName, lastName, email);
  };

  useEffect(() => {
    if (isSignedIn) {
      sendToken();
      actions.setIsAuthenticated(true);
    }
  }, [isSignedIn]);

  return (
    <div className="container-fluid">
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
};
