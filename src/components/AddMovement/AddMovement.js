import { useState } from "react";
import "./AddMovement.css";

export const AddMovement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("expense");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button onClick={toggleModal}>Add Movement</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="tabs">
              <button
                className={activeTab === "expense" ? "active" : ""}
                onClick={() => handleTabChange("expense")}
              >
                Expenses
              </button>
              <button
                className={activeTab === "income" ? "active" : ""}
                onClick={() => handleTabChange("income")}
              >
                Income
              </button>
              <button
                className={activeTab === "saving" ? "active" : ""}
                onClick={() => handleTabChange("saving")}
              >
                Savings
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Amount:</label>
                <input type="number" name="amount" required />
              </div>

              <div>
                <label>Account:</label>
                <select name="account" required>
                  <option value="">Select an account</option>
                  <option value="cuenta1">Cuenta 1</option>
                  <option value="cuenta2">Cuenta 2</option>
                </select>
              </div>

              {activeTab === "expense" || activeTab === "income" ? (
                <div>
                  <label>Transaction Date:</label>
                  <input type="date" name="date" required />
                </div>
              ) : null}

              <div>
                <label>Category:</label>
                <select name="category" required>
                  <option value="">Select a category</option>
                  {activeTab === "expense" && (
                    <>
                      <option value="alimentacion">Alimentación</option>
                      <option value="transporte">Transporte</option>
                      <option value="entretenimiento">Entretenimiento</option>
                    </>
                  )}
                  {activeTab === "income" && (
                    <>
                      <option value="sueldo">Sueldo</option>
                      <option value="freelance">Freelance</option>
                      <option value="inversiones">Inversiones</option>
                    </>
                  )}
                </select>
              </div>

              <div className="btn-container">
                <button type="submit">
                  {activeTab === "expense"
                    ? "Add Expense"
                    : activeTab === "income"
                    ? "Add Income"
                    : activeTab === "saving"
                    ? "Add Savings"
                    : "Add"}
                </button>
                <button onClick={toggleModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
