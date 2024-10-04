import { TbEdit } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../../store/context";
import { useContext, useEffect, useState } from "react";

export const MovemenTab = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState({
    name: "",
  });
  const handleSubmit = () => {
    actions.createMovements(username);
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
    actions.getMovements();
  }, []);

  return (
    <div
      className="tab-pane fade show active"
      id="home-tab-pane"
      role="tabpanel"
      aria-labelledby="home-tab"
      tabIndex="0"
    >
      <div className="col-sm-auto col-12 mt-4 mt-sm-0">
        <div className="hstack gap-2 justify-content-sm-end p-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agregar
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Agrega movimiento
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <label className="form-label">Agrega un Movimiento:</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={handleonChange}
                    placeholder="Agrega un nombre"
                    value={username.name}
                  />
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
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-2">
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
                <th scope="col">Nombre</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(store.movements) &&
                store.movements.map((movement, index) => (
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
                    <td>
                      <div className="d-flex">
                        <div className="flex-grow-1">{movement.name}</div>
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
