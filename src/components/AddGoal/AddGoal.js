import React, { useEffect, useState, useContext } from "react";
import "./AddGoal.css";
import { Context } from "../../store/context";
import { useParams } from "react-router-dom";
import unidecode from "unidecode";

export const AddGoal = ({ onClose }) => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [goalMonths, setGoalMonths] = useState("");
  const [montlyContribution, setMonthlyContribution] = useState("");
  const [monthAchieve, setMonthgAchieve] = useState("");
  const { accountId } = useParams();

  const normalizeString = (str) => {
    return unidecode(str).toLowerCase();
  };

  const state = useContext(Context);

  const isCalculateButtonEnabled = () => {
    return goalName.trim() !== "" && goalAmount !== "" && goalMonths !== "";
  };

  const handleGoalName = (e) => {
    const value = e.target.value;
    setGoalName(value);
    if (value.trim() === "") {
      cleanCalculate();
    }
  };

  const handleGoalAmount = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setGoalAmount(value !== "" ? Math.max(Number(value), 1).toString() : "");
    cleanCalculate();
  };

  const handleGoalMonths = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setGoalMonths(value !== "" ? Math.max(Number(value), 1).toString() : "");
    cleanCalculate();
  };

  const isCalculateContribution = () => {
    const month = Number(goalMonths);
    const amount = Number(goalAmount);
    if (month > 0) {
      setMonthlyContribution((amount / month).toFixed(2));
      setMonthgAchieve(month);
    }
  };

  const cleanCalculate = () => {
    setMonthlyContribution("");
    setMonthgAchieve("");
  };

  const isSaveEnabled = () => {
    return montlyContribution !== "" && monthAchieve !== "";
  };

  const handleSave = () => {
    const normalizedGoalName = normalizeString(goalName);

    const existingGoal = state.store.goals.find(
      (goal) => normalizeString(goal.name) === normalizedGoalName
    );
    if (existingGoal) {
      alert(
        "A goal with this name already exists. Please choose a different name."
      );
      return;
    }
    state.actions.postGoal(
      accountId,
      goalName,
      goalAmount,
      monthAchieve,
      montlyContribution
    );
    setGoalName("");
    setGoalAmount("");
    setGoalMonths("");
    setMonthlyContribution("");
    setMonthgAchieve("");
  };

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header modal-header-goal">
            <h5 className="modal-title">Add goal</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Goal name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="goal name..."
                  onChange={handleGoalName}
                  value={goalName}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Goal amount
                </label>
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="0 CLP"
                  maxLength={10}
                  value={goalAmount}
                  onChange={handleGoalAmount}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Number of months to achieve goal
                </label>
                <input
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="0"
                  maxLength={4}
                  value={goalMonths}
                  onChange={handleGoalMonths}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  disabled={!isCalculateButtonEnabled()}
                  onClick={isCalculateContribution}
                >
                  Calculate Contribution
                </button>
                <div className="card mt-4">
                  <div className="card-body card-goal">
                    <div className="row row-calculate-goal">
                      <div className="col-6">
                        <div className="mb-3 me-2">
                          <label
                            htmlFor="monthlyContribution"
                            className="form-label"
                          >
                            Monthly contribution
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="monthlyContribution"
                            value={montlyContribution}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="mb-3 me-2">
                          <label htmlFor="during" className="form-label">
                            Months to achieve
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="during"
                            value={monthAchieve}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary btn-save-goal"
              disabled={!isSaveEnabled()}
              onClick={handleSave}
            >
              Save goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
