import "./Home";
import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Context } from "../../store/context";
import { useEffect, useContext } from "react";
import { Flow } from "../../components/Flow/Flow";

export const Home = () => {
  const state = useContext(Context);
  const { user, isSignedIn } = useUser();

  console.log(user);

  const sendToken = async () => {
    const { firstName, lastName, emailAddresses } = user;
    const email = emailAddresses[0].emailAddress;
    state.actions.postToken(firstName, lastName, email);
  };

  useEffect(() => {
    if (isSignedIn) {
      sendToken();
    }
  }, [isSignedIn]);



  return (
    <div className="container container-home">
      <div className="graph-section">
        <div className="financial-overview">
          {/* Gráfica de ingresos y gastos  */}
        </div>
        <div className="add-movement">{/* Aqui va el añadir movimiento */}</div>
      </div>
      <div className="options-section">
        <div className="financial-flows">
          <Flow />
        </div>
      </div>
    </div>
  );
};
