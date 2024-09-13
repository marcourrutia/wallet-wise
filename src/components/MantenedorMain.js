function MantenedorMain() {
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
                          <th scope="col">ID</th>
                          <th scope="col">Nombre</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Ingresos</td>
                        </tr>
                        <tr>
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
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Agrega ➕
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
                              Agrega una Categoria
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
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
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="table-responsive">
                    <table class="table table-hover table-nowrap">
                      <thead class="table-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Tipo de movimiento</th>
                          <th scope="col">Nombre de la Categoria</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Ingresos</td>
                          <td>Ahorros</td>
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
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Agregaa
                    </button>
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Agrega una Transaccion
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label
                                for="exampleInputEmail1"
                                className="form-label"
                              >
                                Nombre de la Transaccion:
                              </label>
                              <input
                                type="text"
                                class="form-control"
                                id="formGroupExampleInput"
                                placeholder="Agrega la transaccion"
                              />
                            </div>
                            <div>
                              <select
                                class="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>selecciona una</option>
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
                              data-bs-dismiss="modal"
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
                  </div>
                </div>
                <div class="card">
                  <div class="table-responsive">
                    <table class="table table-hover table-nowrap">
                      <thead class="table-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Nombre de categoria</th>
                          <th scope="col">Nombre de la transaccion</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Gasto fijos</td>
                          <td>Arriendo</td>
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
  