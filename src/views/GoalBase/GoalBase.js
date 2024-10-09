import React, { useContext, useEffect } from "react";
import { Context } from "../../store/context";
import "./GoalBase.css";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { useParams } from "react-router-dom";

export const GoalBase = () => {
  const state = useContext(Context);
  const { accountId } = useParams();

  console.log("State goals:", state.store.goals);
  console.log("account Id", accountId);

  useEffect(() => {
    if (accountId) {
      state.actions.getGoal(accountId);
    }
  }, [accountId]);

  const goals = state.store.goals;

  return (
    <div className="container">
      <BreadCrumb />

      <div className="container container-goal">
        <div className="style-button">
          <button className="btn btn-primary button-goal" type="button">
            Add goal
          </button>
        </div>
        <div className="title-goal">
          <span>Goal Base Financial Management</span>
        </div>

        <table className="table mt-3 style-table-goal">
          <thead className="head-goal">
            <tr>
              <th scope="col">Goal</th>
              <th scope="col">Fulfillment amount</th>
              <th scope="col">Monthly contribution</th>
              <th scope="col">Remaining time</th>
              <th scope="col">Goal status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {goals.length > 0 ? (
              goals.map((item, index) => {
                const dateCreate = item.created_at;
                console.log("fecha de creación", dateCreate);
                const totalMonth = item.estimated_monthly;
                const currentDate = new Date();
                const start = new Date(dateCreate);
                const months =
                  (currentDate.getFullYear() - start.getFullYear()) * 12 +
                  (currentDate.getMonth() - start.getMonth());

                const remainingMonths = Math.max(totalMonth - months, 0);

                return (
                  <tr key={index}>
                    <th scope="row">{item.name}</th>
                    <td>{item.fulfillment_amount}</td>
                    <td>{item.monthly_contribution}</td>
                    <td>{remainingMonths}</td>
                    <td>@</td>
                    <td>
                      <CiEdit />
                      <BsTrash />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No goals have been created yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
