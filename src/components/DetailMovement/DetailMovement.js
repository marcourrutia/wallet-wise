import { Context } from "../../store/context";
import "./DetailMovement.css";
import React, { useContext, useEffect } from "react";

export const DetailMovement = ({ accountId }) => {
  const state = useContext(Context);

  console.log(accountId);

  useEffect(() => {
    if (accountId) {
      state.actions.getMovementsFlow(accountId);
    }
  }, [accountId]);

  return (
    <div className="container mt-4 mb-4">
      <div className="style-movement">

        {state.store.categorySave.map((category, index) => {
          return (
            <div>
              <h2>{category.name}</h2>
              {state.store.movementByAccount.map((item, index) => {
                if (item.category == category.name) {
                  return (
                    <table className="table table-body-transaction">
                      <tbody>
                        <tr>
                          <th scope="col">{item.transaction}</th>
                          <td>{item?.amount}</td>
                          <td>{item?.transaction_date}</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
