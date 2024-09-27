import React, { useState } from "react";
import { DetailMovement } from "../DetailMovement/DetailMovement";
import { ExpenseSumary } from "../ExpenseSumary/ExpenseSumary";
import { Mission } from "../Mission/Mission";
import "./OptionDetailFlow.css";
<<<<<<< HEAD
import { useParams } from "react-router-dom";

export const OptionDetailFlow = () => {
  const [activeTab, setActiveTab] = useState("expense");
  const { accountId } = useParams();

  console.log(accountId);
=======

export const OptionDetailFlow = () => {
  const [activeTab, setActiveTab] = useState("expense");
>>>>>>> 6fd70f0 (First change)

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
      </ul>
      <div className="tab-content mt-4">
        {activeTab === "expense" && (
          <>
<<<<<<< HEAD
            <ExpenseSumary accountId={accountId} />
            <DetailMovement accountId={accountId}/>
=======
            <ExpenseSumary />
            <DetailMovement />
>>>>>>> 6fd70f0 (First change)
            
          </>
        )}
        {activeTab === "finance" && <Mission />}
      </div>
    </div>
  );
};
