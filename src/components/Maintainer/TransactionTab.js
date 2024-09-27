import { TbEdit } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../../store/context";
import { useContext, useEffect, useState } from "react";

export const TransactionTab = () => {
<<<<<<< HEAD
  const [selectedOption, setSelectedOption] = useState("Opción 1");

=======
>>>>>>> dcf5dc5 (goaa)
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState({
    name: "",
  });
  const handleSubmit = () => {
    console.log("hola");
  };

  const handleonChange = (event) => {
    setUsername({
      ...username,
      [event.target.name]: event.target.value,
    });
  };
  console.log(username);
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
      <div className="col-sm-auto col-12 mt-4 mt-sm-0">
        <div className="hstack gap-2 justify-content-sm-end p-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
            data-bs-whatever="@mdo"
          >
            Agregar
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
                  Agrega Transacción
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
<<<<<<< HEAD
                    <label className="col-form-label">
                      Agrega una Categoría:
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={handleonChange}
                      placeholder="Agrega un nombre"
                      value={username.name}
=======
                    <label className="col-form-label">Agrega una Categoría:</label>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={handleonChange}
                    placeholder="Agrega un nombre"
                    value={username.name}
>>>>>>> dcf5dc5 (goaa)
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Categoría:</label>
                    <select
<<<<<<< HEAD
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="Opción 1">Rent Payment</option>
                      <option value="Opción 2">Electricity Bill</option>
                      <option value="Opción 3">Water Bill</option>
=======
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">Gasto fijos</option>
                      <option value="2">Gastos variable</option>
>>>>>>> dcf5dc5 (goaa)
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
<<<<<<< HEAD
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="btn btn-primary"
                >
=======
                <button onClick={handleSubmit} type="button" className="btn btn-primary">
>>>>>>> dcf5dc5 (goaa)
                  Send message
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
              <tr>
                <th>
                  <input
                    className="form-check-input me-1"
                    type="checkbox"
                    value=""
                  />
                </th>
                <th scope="col">ID</th>
                <th scope="col">Transacción</th>
                <th scope="col">Categoría</th>
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
              {Array.isArray(store.transaction) &&
=======
            {Array.isArray(store.transaction) &&
>>>>>>> dcf5dc5 (goaa)
                store.transaction.map((movement, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value=""
                        id={`checkbox-${index}`}
                      />
                    </td>
                    <td>{movement.id}</td>
                    <td>{movement.name}</td>
                    <td>
                      <div className="d-flex">
<<<<<<< HEAD
                        <div className="flex-grow-1">
                          {movement.category_id}
                        </div>
=======
                        <div className="flex-grow-1">{movement.category_id}</div>
>>>>>>> dcf5dc5 (goaa)
                        <div>
                          <span className="p-2">
                            <TbEdit />
                          </span>
                          <span>
                            <FaRegTrashAlt />
                          </span>
                        </div>
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
