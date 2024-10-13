import { Context } from "../../store/context";
import "./DetailMovement.css";
import React, { useContext, useEffect, useState } from "react";
import { ImCircleUp } from "react-icons/im";

export const DetailMovementTwo = ({
  accountId,
  selectedMonth,
  selectedYear,
}) => {
  const state = useContext(Context);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let incomeTotal = 0;
    let expenseTotal = 0;

    state.store.movementByAccount.forEach((item) => {
      const transactionMonth =
        new Date(item.transaction_date).getUTCMonth() + 1;
      const transactionYear = new Date(item.transaction_date).getUTCFullYear();

      if (
        (selectedMonth == null || transactionMonth === selectedMonth) &&
        (selectedYear == null || transactionYear === selectedYear)
      ) {
        if (item.category == "Income" || item.category == "Savings") {
          incomeTotal += item.amount;
        } else if (
          item.category == "Fixed Expenses" ||
          item.category == "Variable Expenses"
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
      <div className="container mt-4 mb-4">
        <div className="style-movement">
          {state.store.categorySave.map((category, index) => {
            const collapseId = `collapse-${index}`;
            let totalAmount = 0;
            return (
              <div className="accordion-item accordion-style" key={index}>
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
                        console.log(totalAmount);
                        return;
                      }
                    })}
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