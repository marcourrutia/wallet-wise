import { Context } from "../../store/context";
import "./DetailMovement.css";
import { useContext, useEffect } from "react";

export const DetailMovement = ({ accountId }) => {
  const state = useContext(Context);

  console.log(accountId);

  useEffect(() => {
    if (accountId) {
      state.actions.getMovements(accountId);
    }
  }, [accountId]);

  return (
    <div className="container mt-4 mb-4">
      <div className="style-movement">
        <table className="table table-head">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
        </table>
        {state.store.movementByAccount.length > 0 ? (
          state.store.movementByAccount.map((item, index) => {
            return (
              <table className="table table-body-transaction">
                <thead>
                  <tr>
                    <th scope="col">{item.category_id?.name}</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">{item.transaction_id?.name}</th>
                    <td>{item?.amount}</td>
                    <td>{item?.transaction_date}</td>
                  </tr>
                </tbody>
              </table>
            );
          })
        ) : (
          <h4>Nada que decir</h4>
        )}
      </div>
    </div>
  );
};
