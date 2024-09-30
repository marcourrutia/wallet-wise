import { useEffect, useState, useContext } from "react";
import { Context } from "../../store/context";
import { get, post } from "../../services";
import "./AddMovement.css";
import { MsgModal } from "../MsgModal/MsgModal";

export const AddMovement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("expense");
  const [accounts, setAccounts] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const { store } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const closeModal = () => setShowModal(false);
  const [formData, setFormData] = useState({
    amount: "",
    accountId: "",
    date: "",
    transactionId: "",
  });

  useEffect(() => {
    const fetchAccountsAndTransaction = async () => {
      try {
        const { data: accountsData } = await get("/account", store.accessToken);
        const accountsTrue = accountsData.filter((item) => item.state === true);
        accountsTrue.sort((a, b) => a.name.localeCompare(b.name));
        setAccounts(accountsTrue);

        const { data: transactionData } = await get("/transactions");
        setTransaction(transactionData);

        filterTransactions(transactionData);
      } catch (error) {
        setModalMessage("Error fetching accounts or transaction: " + error);
        setShowModal(true);
      }
    };

    if (isModalOpen) {
      fetchAccountsAndTransaction();
    }
  }, [isModalOpen]);

  useEffect(() => {
    filterTransactions(transaction);
  }, [activeTab, transaction]);

  const filterTransactions = (transactions) => {
    const filtered =
      activeTab === "expense"
        ? transactions.filter((t) => t.category_id === 1 || t.category_id === 2)
        : activeTab === "income"
        ? transactions.filter((t) => t.category_id === 3 || t.category_id === 4)
        : activeTab === "saving"
        ? transactions.filter((t) => t.category_id === 3 || t.category_id === 4)
        : [];
    filtered.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredTransactions(filtered);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const clearForm = () => {
    setFormData({
      amount: "",
      accountId: "",
      date: "",
      transactionId: "",
    });
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
      transaction_id: formData.transactionId,
    };

    try {
      const { data, status } = await post(
        "/add-movement",
        movementData,
        store.accessToken
      );
      if (status === 201) {
        setModalMessage("Movement added successfully");
        setShowModal(true);
        clearForm();
        toggleModal();
      }
    } catch (error) {
      console.error("Error adding movement:", error);
    }
  };

  return (
    <>
      {showModal && <MsgModal message={modalMessage} onClose={closeModal} />}
      <button onClick={toggleModal}>Add Movement</button>

      {isModalOpen && (
        <div className="modal-mv">
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
                <label>Transaction date:</label>
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
                  name="transactionId"
                  value={formData.transactionId}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select type</option>
                  {filteredTransactions?.map((transaction) => (
                    <option key={transaction.id} value={transaction.id}>
                      {transaction.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="btn-container">
                <button type="submit">
                  {activeTab === "expense"
                    ? "Add expense"
                    : activeTab === "income"
                    ? "Add income"
                    : "Add savings"}
                </button>
                <button
                  onClick={() => {
                    toggleModal();
                    clearForm();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
