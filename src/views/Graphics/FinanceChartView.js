import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../store/context";
import { CalendarExpense } from "../../components/CalendarExpense/CalendarExpense";
import { DetailMovementTwo } from "../../components/DetailMovementTwo/DetailMovementTwo";
import "./FinanceChartView.css";


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
    <div className="container">
      <div className="container container-grafic">
        <li className="calendar-graffic">
          <CalendarExpense onMonthSelect={handleMonthSelect} />
        </li>
      </div>
      <div className="title-grafic">
          <span>Basic Financial Management (50/30/20 Rule)</span>
      </div>
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
