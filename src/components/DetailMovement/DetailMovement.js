<<<<<<< HEAD
<<<<<<< HEAD
import { Context } from "../../store/context";
import "./DetailMovement.css";
import React, { useContext, useEffect } from "react";
import { ImCircleUp } from "react-icons/im";

export const DetailMovement = ({ accountId, selectedMonth, selectedYear }) => {
  const state = useContext(Context);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    if (accountId) {
      state.actions.getMovementsFlow(accountId);
    }
  }, [accountId]);

  return (
    <div className="container mt-4 mb-4">
      <div className="style-movement">
        <table className="table style-table-head mb-1">
=======
=======
import { Context } from "../../store/context";
>>>>>>> 57ccb23 (Second change)
import "./DetailMovement.css";
import { useContext, useEffect } from "react";


export const DetailMovement = ({ accountId }) => {
  const state = useContext(Context);

  console.log(accountId);

  useEffect(() => {
    if (accountId) { 
        state.actions.getMovements(accountId); 
      }
  },[accountId]);

  return (
    <div className="container mt-4 mb-4">
      <div className="style-movement">
        <table className="table table-head">
>>>>>>> 5ad8dd0 (First change)
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Amount</th>
<<<<<<< HEAD
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
                    const transactionMonth = new Date(item.transaction_date).getMonth() + 1;
                    const transactionYear = new Date(item.transaction_date).getFullYear();
                    
                    if (item.category == category.name &&
                      (selectedMonth == null || transactionMonth === selectedMonth) &&
                      (selectedYear == null || transactionYear === selectedYear)) {
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
=======
              <th scope="col">Date</th>
            </tr>
          </thead>
        </table>
<<<<<<< HEAD
        <table className="table table-body-transaction">
          <thead>
            <tr>
              <th scope="col">Name of categori</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
>>>>>>> 5ad8dd0 (First change)
=======
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
>>>>>>> 57ccb23 (Second change)
      </div>
    </div>
  );
};
