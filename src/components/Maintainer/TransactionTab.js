import { TbEdit } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../../store/context";
import { useContext, useEffect, useState } from "react";
import "./Maintainer.css";

export const TransactionTab = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState({
    name: "",
    category_id: "",
  });

  const handleSubmit = (event) => {
    if (!username.category_id) {
      alert("Please select a category.");
      return;
    }
    actions.createTransaction(username);
    setUsername({
      name: "",
      category_id: store.categories?.[0]?.id || "",
    });
    setSuccessMessage("Transaction added successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleonChange = (event) => {
    setUsername({
      ...username,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = (transactionId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );
    console.log("transaction id",transactionId);
    if (isConfirmed) {
      actions.deleteTransaction(transactionId);
    }
  };

  useEffect(() => {
    actions.getTransaction();
  }, []);

  return (
    <div
      className="tab-pane fade p-2"
      id="contact-tab-pane"
      role="tabpanel"
      aria-labelledby="contact-tab"
      tabIndex="0"
    >
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}
      <div className="col-sm-auto col-12 mt-4 mt-sm-0">
        <div className="hstack gap-2 justify-content-sm-end p-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            data-bs-whatever="@mdo"
          >
            Add
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Transactions
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="col-form-label">Add Category:</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={handleonChange}
                      placeholder="Add a name"
                      value={username.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Category:</label>
                    <select
                      name="category_id"
                      value={username.category_id}
                      onChange={(e) =>
                        setUsername({
                          ...username,
                          category_id: e.target.value,
                        })
                      }
                    >
                      <option value="" disabled>
                        Select a category
                      </option>

                      {Array.isArray(store.categories) &&
                        store.categories.map((movement, index) => (
                          <option key={index} value={movement.id}>
                            {movement.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover table-nowrap">
            <thead className="table-light">
              <tr className="style-maintainer-title">
                <th scope="col">ID</th>
                <th scope="col">Transactions</th>
                <th scope="col">Category ID</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(store.transaction) &&
                store.transaction.map((movement, index) => (
                  <tr key={index}>
                    <td>{movement.id}</td>
                    <td>{movement.name}</td>
                    <td>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          {movement.category_id}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span>
                          <FaRegTrashAlt onClick={() => handleDelete(movement.id)}/>
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
