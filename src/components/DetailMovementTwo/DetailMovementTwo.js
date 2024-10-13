import { Context } from "../../store/context";
import "./DetailMovement.css";
import React, { useContext, useEffect, useState } from "react";
import { GraphicsPieChart } from "../../components/Graphics/GraphicsPieChart";
import { GraphicsPieChartTwo } from "../../components/Graphics/GraphicsPieChartTwo"

export const DetailMovementTwo = ({
  accountId,
  selectedMonth,
  selectedYear,
}) => {
  const state = useContext(Context);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalAmounts, setTotalAmounts] = useState([]);

  const [AIncomes, setAIncomes] = useState(0);
  const [ASavings, setASavings] = useState(0);
  const [AFExpenses, setAFExpenses] = useState(0);
  const [AVExpenses, setAVExpenses] = useState(0);

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

  useEffect(() => {
    if (accountId) {
      state.actions.getMovementsFlow(accountId);
    }
  }, [accountId]);

  useEffect(() => {
    const newTotalAmounts = state.store.categorySave.map((category) => {
      let totalAmount = 0;
      state.store.movementByAccount.forEach((item) => {
        const transactionMonth =
          new Date(item.transaction_date).getUTCMonth() + 1;
        const transactionYear = new Date(
          item.transaction_date
        ).getUTCFullYear();
        if (
          item.category == category.name &&
          (selectedMonth == null || transactionMonth === selectedMonth) &&
          (selectedYear == null || transactionYear === selectedYear)
        ) {
          totalAmount += item.amount;
        }
      });
      return { category: category.name, totalAmount };
    });
    setTotalAmounts(newTotalAmounts);
    setAIncomes(
      newTotalAmounts
        .filter((item) => item.category === "Incomes")
        .map((item) => item.totalAmount)[0] || 0
    );
    setASavings(
      newTotalAmounts
        .filter((item) => item.category === "Savings")
        .map((item) => item.totalAmount)[0] || 0
    );
    setAFExpenses(
      newTotalAmounts
        .filter((item) => item.category === "Fixed expenses")
        .map((item) => item.totalAmount)[0] || 0
    );
    setAVExpenses(
      newTotalAmounts
        .filter((item) => item.category === "Variable expenses")
        .map((item) => item.totalAmount)[0] || 0
    );
  }, [
    selectedMonth,
    selectedYear,
    state.store.movementByAccount,
    state.store.categorySave,
  ]);

  return (
    <div>
      <div className="container mt-4 mb-4">
        <GraphicsPieChart
          AIncomes={AIncomes}
          ASavings={ASavings}
          AFExpenses={AFExpenses}
          AVExpenses={AVExpenses}
        />
      </div>
      <div className="container mt-4 mb-4">
        <GraphicsPieChartTwo
          AIncomes={AIncomes}
          ASavings={ASavings}
          AFExpenses={AFExpenses}
          AVExpenses={AVExpenses}
        />
      </div>
    </div>
  );
};
