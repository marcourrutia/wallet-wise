import { Context } from "../../store/context";
import "./DetailMovement.css";
import React, { useContext, useEffect } from "react";
import { ImCircleUp } from "react-icons/im";

export const DetailMovement = ({ accountId }) => {
  const state = useContext(Context);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  console.log(accountId);

  useEffect(() => {
    if (accountId) {
      state.actions.getMovementsFlow(accountId);
    }
  }, [accountId]);

  return (
    <div className="container mt-4 mb-4">
      <div className="style-movement">
        <table className="table style-table-head mb-1">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
              <th scope="col">Date of transaction</th>
            </tr>
          </thead>
        </table>
        {state.store.categorySave.map((category, index) => {
          const collapseId = `collapse-${index}`;
          let totalAmount = 0;
          return (
            <div className="accordion-item accordion-style" key={index}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button button-style-category"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <div className="icon-accordion">
                    {category.name}
                    <ImCircleUp className={`icon-colap ${collapseId}`} />
                  </div>
                </button>
              </h2>
              <div id={collapseId} className="accordion-collapse collapse show">
                <div className="accordion-body">
                  {state.store.movementByAccount.map((item, index2) => {
                    if (item.category == category.name) {
                      totalAmount += item.amount;
                      const formattedAmount = item.amount.toLocaleString(
                        "es-CL",
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      );
                      return (
                        <table
                          className="table table-body-transaction"
                          key={index2}
                        >
                          <tbody>
                            <tr>
                              <th scope="col">{item.transaction}</th>
                              <td>{formattedAmount}</td>
                              <td>{formatDate(item?.transaction_date)}</td>
                            </tr>
                          </tbody>
                        </table>
                      );
                    }
                  })}{" "}
                  <h4>
                    Total:{" "}
                    {totalAmount.toLocaleString("es-CL", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    CLP
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
