import { TbEdit } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../../store/context";
import { useContext, useEffect, useState } from "react";

export const CategoryTab = () => {
  const [selectedOption, setSelectedOption] = useState("Opción 1");

  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState({
    name: "",
  });
  const handleSubmit = () => {
    console.log("hola estoy en el categorys");
  };

  const handleonChange = (event) => {
    setUsername({
      ...username,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    actions.getCategory();
  }, []);

  return (
    <div
      className="tab-pane fade"
      id="profile-tab-pane"
      role="tabpanel"
      aria-labelledby="profile-tab"
      tabIndex="0"
    >
      <div className="col-sm-auto col-12 mt-4 mt-sm-0">
        <div className="hstack gap-2 justify-content-sm-end p-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
            data-bs-whatever="@mdo"
          >
            Agregar
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Agrega Categoría
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
                    />
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">Movimiento:</label>
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="Opción 1">Expense</option>
                      <option value="Opción 2">Income</option>
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
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
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
                <th scope="col">Categoría</th>
                <th scope="col">Movimiento</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(store.categories) &&
                store.categories.map((movement, index) => (
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
                        <div className="flex-grow-1">
                          {movement.type_of_movement_id}
                        </div>
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
