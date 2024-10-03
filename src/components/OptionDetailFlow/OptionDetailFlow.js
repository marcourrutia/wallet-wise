import React, { useState } from "react";
import { DetailMovement } from "../DetailMovement/DetailMovement";
import { ExpenseSumary } from "../ExpenseSumary/ExpenseSumary";
<<<<<<< HEAD
import { CalendarExpense } from "../CalendarExpense/CalendarExpense";
import { Mission } from "../Mission/Mission";
import "./OptionDetailFlow.css";
import { useParams } from "react-router-dom";

export const OptionDetailFlow = () => {
  const [activeTab, setActiveTab] = useState("expense");
  const { accountId } = useParams();

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleMonthSelect = (month, year) => {
    setSelectedMonth(month);
    setSelectedYear(year);
  };
=======
import { Mission } from "../Mission/Mission";
import "./OptionDetailFlow.css";

export const OptionDetailFlow = () => {
  const [activeTab, setActiveTab] = useState("expense");
>>>>>>> 5ad8dd0 (First change)

  return (
    <div className="container">
      <nav
        style={{ "--bs-breadcrumb-divider": "'>'" }}
        aria-label="breadcrumb"
        className="breadcrumb-nav"
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item ">
            <a href="/home">Home</a>
          </li>
          <li
            className="breadcrumb-item active breadcrumb-item-better"
            aria-current="page"
          >
            Detail Flow
          </li>
        </ol>
      </nav>
      <ul className="nav nav-tabs nav-option-ul">
<<<<<<< HEAD
        <div className="d-flex">
          <li className="nav-item nav-option-detail">
            <a
              className={`nav-link ${
                activeTab === "expense" ? "active" : ""
              } nav-option-detail-a`}
              aria-current="page"
              href="#"
              onClick={() => setActiveTab("expense")}
            >
              Expense Tracker
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${
                activeTab === "finance" ? "active" : ""
              } nav-option-detail-a`}
              href="#"
              onClick={() => setActiveTab("finance")}
            >
              Finance Overview & Suggestions
            </a>
          </li>
        </div>
        <li className="calendar-expense-container">
          <CalendarExpense onMonthSelect={handleMonthSelect} />
=======
        <li className="nav-item nav-option-detail">
          <a
            className={`nav-link ${
              activeTab === "expense" ? "active" : ""
            } nav-option-detail-a`}
            aria-current="page"
            href="#"
            onClick={() => setActiveTab("expense")}
          >
            Expense Tracker
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${
              activeTab === "finance" ? "active" : ""
            } nav-option-detail-a`}
            href="#"
            onClick={() => setActiveTab("finance")}
          >
            Finance Overview & Suggestions
          </a>
>>>>>>> 5ad8dd0 (First change)
        </li>
      </ul>
      <div className="tab-content mt-4">
        {activeTab === "expense" && (
          <>
<<<<<<< HEAD
            <ExpenseSumary accountId={accountId} />
            <DetailMovement
              accountId={accountId}
              selectedMonth={selectedMonth}
              selectedYear={selectedYear}
            />
=======
            <ExpenseSumary />
            <DetailMovement />
            
>>>>>>> 5ad8dd0 (First change)
          </>
        )}
        {activeTab === "finance" && <Mission />}
      </div>
    </div>
  );
};
