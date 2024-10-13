import { Context } from "../../store/context";
import "./DetailMovement.css";
import React, { useContext, useEffect, useState } from "react";
import { ImCircleUp } from "react-icons/im";
import { ExpenseSumary } from "../ExpenseSumary/ExpenseSumary";

export const DetailMovement = ({ accountId, selectedMonth, selectedYear }) => {
  const state = useContext(Context);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);


  useEffect(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;
    state.store.movementByAccount.forEach((item) => {
      const transactionMonth = new Date(item.transaction_date).getUTCMonth() + 1;
      const transactionYear = new Date(item.transaction_date).getUTCFullYear();

      if (
        (selectedMonth == null || transactionMonth === selectedMonth) &&
        (selectedYear == null || transactionYear === selectedYear)
      ) {
        if (["incomes", "savings"].includes(item.category.toLowerCase())) {
          incomeTotal += item.amount;
        } else if (
          ["fixed expenses", "variable expenses"].includes(item.category.toLowerCase())
        ) {
          expenseTotal += item.amount;
        }
      }
    });
    setTotalIncome(incomeTotal);
    setTotalExpense(expenseTotal);
  }, [selectedMonth, selectedYear, state.store.movementByAccount]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    if (accountId) {
      state.actions.getMovementsFlow(accountId);
    }
  }, [accountId]);

  return (
    <div>
      <ExpenseSumary totalIncome={totalIncome} totalExpense={totalExpense} />
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
                <div
                  id={collapseId}
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    {state.store.movementByAccount.map((item, index2) => {
                      const transactionMonth =
                        new Date(item.transaction_date).getUTCMonth() + 1;
                      const transactionYear = new Date(
                        item.transaction_date
                      ).getUTCFullYear();

                      if (
                        item.category == category.name &&
                        (selectedMonth == null ||
                          transactionMonth === selectedMonth) &&
                        (selectedYear == null ||
                          transactionYear === selectedYear)
                      ) {
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
    </div>
  );
};
