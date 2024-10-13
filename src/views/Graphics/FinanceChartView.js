import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/context";
import { CalendarExpense } from "../../components/CalendarExpense/CalendarExpense";
import { DetailMovementTwo } from "../../components/DetailMovementTwo/DetailMovementTwo";


export const FinanceChartView = () => {
  const state = useContext(Context);
  const [activeTab, setActiveTab] = useState("expense");

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const { accountId } = useParams();

  const handleMonthSelect = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  };
  useEffect(() => {
    if (accountId) {
      state.actions.getMovementsFlow(accountId);
    }
  }, [accountId]);

  
  return (
    <div>
      <div>
        <li className="calendar-expense-container">
          <CalendarExpense onMonthSelect={handleMonthSelect} />
        </li>
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">Distribución de Gastos y Ahorros</h3>
      <div className="tab-content mt-4">
        {activeTab === "expense" && (
          <>
            <DetailMovementTwo
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
          </>
        )}
      </div>
      
    </div>
  );
};
