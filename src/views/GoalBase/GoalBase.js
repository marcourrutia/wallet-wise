import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/context";
import "./GoalBase.css";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { BsTrash } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { AddGoal } from "../../components/AddGoal/AddGoal";
import { FaRegFaceGrinStars } from "react-icons/fa6";
import { FaRegFaceGrinWide } from "react-icons/fa6";
import { FaRegFaceFrownOpen } from "react-icons/fa6";
import { Tooltip } from "bootstrap";

export const GoalBase = () => {
  const state = useContext(Context);
  const { accountId } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editGoal, setGoalToEdit] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (accountId) {
      state.actions.getGoal(accountId);
    }
  }, [accountId]);

  const goals = state.store.totalContribution;

  const handledModalAddGoal = () => {
    setModalOpen(true);
    setIsEditMode(false);
    setGoalToEdit(null);
  };

  const handleEditGoal = (goal) => {
    setGoalToEdit(goal);
    setIsEditMode(true);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDeleteGoal = (goalId) => {
    const goalToDelete = goals.find((goal) => goal.id === goalId);
    const canDelete = goalToDelete.total_contributed === 0;

    if (!canDelete) {
      alert("Cannot delete this goal because it has associated contributions.");
      return;
    }
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this goal?"
    );
    if (isConfirmed) {
      state.actions.deleteGoal(accountId, goalId);
    }
  };

  useEffect(() => {
    state.actions.getTotalContribution(accountId);
  }, [state.store.goals]);

  //Este useEffect es de un codigo que vi el ejemplo,
  //no funcionaba sin esto el ejemplo que queria hacer, lo dejo temporalmente
  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, [goals]);

  const faceStatus = (totalContribution, estimateContribution) => {
    if (totalContribution === estimateContribution) {
      return <FaRegFaceGrinWide className="happy-face mouth eye face-happy" />;
    } else if (totalContribution > estimateContribution) {
      return <FaRegFaceGrinStars className="happy-face face-very-happy" />;
    } else {
      return <FaRegFaceFrownOpen className="happy-face face-sad" />;
    }
  };

  return (
    <div className="container">
      <BreadCrumb />

      <div className="container container-goal">
        <div className="style-button">
          <button
            className="btn btn-primary button-goal"
            type="button"
            onClick={handledModalAddGoal}
          >
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
              <th scope="col">Goal month</th>
              <th scope="col">Remaining time</th>
              <th scope="col">Goal status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {goals.length > 0 ? (
              goals.map((item, index) => {
                const totalRemainingMonth = item.remaining_time;
                const totalContribution = item.total_contributed;
                const estimateContribution = item.estimated_contribution;
                const formattedAmount = Number(
                  item.fulfillment_amount
                ).toLocaleString("es-CL", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });

                const formattedAmountMonthly = Number(
                  item.monthly_contribution
                ).toLocaleString("es-CL", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                });
                return (
                  <tr key={index} className="style-row-goal">
                    <th
                      scope="row"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-title={item.name}
                    >
                      {item.name}
                    </th>
                    <td>{formattedAmount}</td>
                    <td>{formattedAmountMonthly}</td>
                    <td>{item.estimated_monthly}</td>
                    <td>{totalRemainingMonth}</td>
                    <td>
                      {faceStatus(totalContribution, estimateContribution)}
                    </td>
                    <td className="td-action">
                      <div className="icon-action">
                        <CiEdit
                          className="style-action"
                          onClick={() => handleEditGoal(item)}
                        />
                      </div>
                      <div className="icon-action">
                        <BsTrash
                          className="style-action"
                          onClick={() => handleDeleteGoal(item.id)}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No goals have been created yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <AddGoal onClose={closeModal} isEditMode={isEditMode} goal={editGoal} />
      )}
    </div>
  );
};
