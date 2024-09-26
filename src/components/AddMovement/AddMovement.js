import { useEffect, useState } from "react";
import { get, post } from "../../services";
import "./AddMovement.css";

export const AddMovement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("expense");
  const [accounts, setAccounts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    accountId: "",
    date: "",
    categoryId: "",
  });

  useEffect(() => {
    const fetchAccountsAndCategories = async () => {
      try {
        const { data: accountsData } = await get("/accounts");
        setAccounts(accountsData);

        const { data: categoriesData } = await get("/transactions");
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching accounts or categories:", error);
      }
    };

    if (isModalOpen) {
      fetchAccountsAndCategories();
    }
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movementData = {
      amount: formData.amount,
      account_id: formData.accountId,
      transaction_date: formData.date,
      transaction_id: formData.categoryId,
    };

    try {
      const { data, status } = await post("/movements", movementData);
      if (status === 201) {
        console.log("Movement added successfully:", data);
        toggleModal();
      }
    } catch (error) {
      console.error("Error adding movement:", error);
    }
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
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label>Account:</label>
                <select
                  name="accountId"
                  value={formData.accountId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select an account</option>
                  {accounts?.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Transaction Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label>Type of transaction:</label>
                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select type</option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="btn-container">
                <button type="submit">
                  {activeTab === "expense"
                    ? "Add Expense"
                    : activeTab === "income"
                    ? "Add Income"
                    : "Add Savings"}
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
