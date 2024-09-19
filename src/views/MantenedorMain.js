import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";

function MantenedorMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Esto es necesario para manejar el fondo oscuro del modal
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  return (
    <div className="container">
      <div className="row">
        <div className="container-fluid">
          <div className="border-bottom pt-6">
            <div className="row align-items-center">
              <div className="col-sm col-12">
                <h1 className="h2 ls-tight">
                  <span className="d-inline-block me-3">👋</span>Hi, Tahlia!
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body p-2">
          <ul className="nav nav-pills nav-fill" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Tipo movimiento
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Categoria
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact-tab-pane"
                type="button"
                role="tab"
                aria-controls="contact-tab-pane"
                aria-selected="false"
              >
                Transacciones
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div class="card p-2">
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="table-light">
                      <tr>
                        <th>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </th>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </td>
                        <td>1</td>
                        <td>Ingresos</td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </td>
                        <td>2</td>
                        <td>Egreso</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div className="col-sm-auto col-12 mt-4 mt-sm-0">
                <div className="hstack gap-2 justify-content-sm-end p-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                  >
                    Agregaa
                  </button>
                </div>
              </div>
              {isModalOpen && (
                <div
                  className="modal show d-block"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Agrega una Categoria
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Nombre del Categoria:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Agrega la Categoria"
                          />
                        </div>
                        <label for="exampleInputEmail1" className="form-label">
                          Selecciona el tipo de movimiento asociado:
                        </label>
                        <div>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Selecciona una</option>
                            <option value="1">Egreso</option>
                            <option value="2">Ingreso</option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div class="card">
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="table-light">
                      <tr>
                        <th>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </th>
                        <th scope="col">ID</th>
                        <th scope="col">Movimiento</th>
                        <th scope="col">Categoria</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </td>
                        <td>1</td>
                        <td>Egreso</td>
                        <td>
                          <div class="d-flex">
                            <div class=" flex-grow-1">Gasto variable</div>
                            <div>
                              <spam>
                              <FaPencilAlt onClick={openModal} />
                              </spam>
                              <spam>
                                <MdDelete />
                              </spam>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade p-2"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <div className="col-sm-auto col-12 mt-4 mt-sm-0">
                <div className="hstack gap-2 justify-content-sm-end p-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={openModal}
                  >
                    Agregaa
                  </button>
                </div>
              </div>
              {isModalOpen && (
                <div
                  className="modal show d-block"
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="staticBackdropLabel"
                        >
                          Agrega una Categoria
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={closeModal}
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label
                            for="exampleInputEmail1"
                            className="form-label"
                          >
                            Nombre del Categoria:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Agrega la Categoria"
                          />
                        </div>
                        <label for="exampleInputEmail1" className="form-label">
                        Selecciona la categoria asociada:
                        </label>
                        <div>
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Selecciona una</option>
                            <option value="1">Ingresos</option>
                            <option value="2">Gastos fijos</option>
                            <option value="3">Gastos variables</option>
                            <option value="3">Ahorro</option>
                          </select>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={closeModal}
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div class="card">
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="table-light">
                      <tr>
                        <th>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </th>
                        <th scope="col">ID</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Transaccion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <input
                            class="form-check-input me-1"
                            type="checkbox"
                            value=""
                            id="firstCheckboxStretched"
                          />
                        </th>
                        <td>1</td>
                        <td>Gasto fijos</td>
                        <td>
                          <div class="d-flex">
                            <div class=" flex-grow-1">Luz</div>
                            <div>
                              <FaPencilAlt
                                onClick={openModal}
                              />
                              <MdDelete />
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MantenedorMain;