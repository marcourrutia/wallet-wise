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
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const closeModal = () => setShowModal(false);
  const preToday = new Date().toLocaleDateString("es-CL");
  const [day, month, year] = preToday.split("-");
  const today = `${year}-${month}-${day}`;
  const [isPreviousMonth, setIsPreviousMonth] = useState(false);
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
      setFormData({
        amount: "",
        accountId: store.flowSelected,
        date: "",
        transactionId: "",
      });
    }
  }, [isModalOpen]);

  useEffect(() => {
    filterTransactions(transaction);
  }, [activeTab, transaction]);

  const filterTransactions = (transactions) => {
    const filtered =
      activeTab === "expense"
        ? transactions.filter((t) => t.category_id === 3 || t.category_id === 4)
        : activeTab === "income"
        ? transactions.filter((t) => t.category_id === 1)
        : activeTab === "saving"
        ? transactions.filter((t) => t.category_id === 2)
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
      accountId: store.flowSelected,
      date: "",
      transactionId: "",
    });
    setIsPreviousMonth(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const checkIfPreviousMonth = (date) => {
    const selectedDate = new Date(date);
    const currentDate = new Date();

    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const selectedMonth = selectedDate.getUTCMonth();
    const selectedYear = selectedDate.getUTCFullYear();

    return selectedMonth === previousMonth && selectedYear === previousYear;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "amount") {
      let amount = parseInt(value.replace(/\D/g, ""), 10);
      if (isNaN(amount) || amount <= 0) {
        amount = "";
      } else if (amount > 999999999) {
        amount = 999999999;
      }

      const formattedAmount = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
      }).format(amount);

      setFormData({
        ...formData,
        [name]: amount ? formattedAmount : "",
      });
    } else if (name === "date") {
      setFormData({
        ...formData,
        [name]: value,
      });
      const isPrevMonth = checkIfPreviousMonth(value);
      setIsPreviousMonth(isPrevMonth);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movementData = {
      amount: parseInt(formData.amount.replace(/\D/g, ""), 10),
      account_id: formData.accountId,
      transaction_date: formData.date,
      transaction_id: formData.transactionId,
    };

    try {
      const { status } = await post(
        "/add-movement",
        movementData,
        store.accessToken
      );
      if (status === 201) {
        setModalMessage("Movement added successfully");
        setShowModal(true);
        toggleModal();
        if (isPreviousMonth) {
          actions.setIsNewData(
            store?.isNewData + "-" + movementData.account_id
          );
        } else {
          actions.setNewMovement(!store.newMovement);
        }
        clearForm();
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
                Incomes
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
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  placeholder="0 CLP"
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
                  max={today}
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
