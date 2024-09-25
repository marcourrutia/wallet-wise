import { TbEdit } from "react-icons/tb";
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../../store/context";
import { useContext, useEffect, useState } from "react";
import MyModal from "../Maintainer/MyModal";

export const MovemenTab = () => {
  const { store, actions } = useContext(Context);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
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
            onClick={handleOpenModal}
          >
            Launch demo modal
          </button>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
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
